import { Product } from '@/payload-types'
import { create } from 'zustand'
import {
  createJSONStorage,
  persist,
} from 'zustand/middleware'

export type CartItem = {
  product: Product,
  quantity: number
}

type CartState = {
  items: CartItem[]
  addItem: (product: Product, quantity: number) => void
  removeItem: (productId: string) => void
  clearCart: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product: Product, quantity: number) =>
        set((state) => {
          const found = false
          for(const i in state.items.length)
            if (state.items[i].product === product && !found){
               state.items[i].quantity += quantity
               found = true
            }
          if(!found){ 
            state.items = [...state.items, { product: product, quantity: quantity }]
          }

          return { 
            items: state.items
          }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.product.id !== id
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)