import { z } from 'zod'
import {
  privateProcedure,
  publicProcedure,
  router,
} from './trpc'
import { TRPCError } from '@trpc/server'
import { getPayloadClient } from '../get-payload'
import { stripe } from '../lib/stripe'
import type Stripe from 'stripe'
import { Product } from '@/payload-types'

export const paymentRouter = router({
  createSession: privateProcedure
    .input(z.object({ productsInCart: z.array(z.object({productId: z.string(), quantity: z.number()})) }))
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx
      let { productsInCart } = input
      let productIds = productsInCart.map((item)=>item.productId)

      if (productsInCart.length === 0) {
        throw new TRPCError({ code: 'BAD_REQUEST' })
      }

      const payload = await getPayloadClient()

      const { docs: products } = await payload.find({
        collection: 'products',
        where: {
          id: {
            in: productIds,
          },
        },
      })

      const filteredProducts: Product[] = products.filter((prod) =>
        Boolean(prod.priceId)
      )
      
      const mappedProducts:{priceId: string|null|undefined, quantity: number|undefined}[] = []

      let map = new Map<string, number>()
      for (const item of productsInCart) {
        map.set(item.productId, item.quantity);
      }

      for (const pid of filteredProducts){
        if(map.has(pid.id)){
          mappedProducts.push({
            priceId: pid.priceId,
            quantity: map.get(pid.id)
          })
        }
      }

      const order = await payload.create({
        collection: 'orders',
        data: {
          _isPaid: false,
          products: filteredProducts.map((prod) => prod.id),
          user: user.id,
        },
      })

      const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
        []

      /* filteredProducts.forEach((product) => {
        line_items.push({
          price: product.priceId!,
          quantity: 1,
        })
      }) */

      mappedProducts.forEach((prod)=>{
        line_items.push({
          price: prod.priceId,
          quantity: prod.quantity
        })
      })

      line_items.push({
        price: 'price_1Od4MBSJnEi1rHKV9Ct0gjbU',
        quantity: 1,
        adjustable_quantity: {
          enabled: false,
        },
      })

      try {
        const stripeSession =
          await stripe.checkout.sessions.create({
            success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
            cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/cart`,
            mode: 'payment',
            metadata: {
              userId: user.id,
              orderId: order.id,
            },
            line_items,
          })

        return { url: stripeSession.url }
      } catch (err) {
        return { url: null }
      }
    }),
  pollOrderStatus: privateProcedure
    .input(z.object({ orderId: z.string() }))
    .query(async ({ input }) => {
      const { orderId } = input

      const payload = await getPayloadClient()

      const { docs: orders } = await payload.find({
        collection: 'orders',
        where: {
          id: {
            equals: orderId,
          },
        },
      })

      if (!orders.length) {
        throw new TRPCError({ code: 'NOT_FOUND' })
      }

      const [order] = orders

      return { isPaid: order._isPaid }
    }),
})