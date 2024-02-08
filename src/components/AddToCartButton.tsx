'use client'

import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useCart } from '@/hooks/use-cart'
import { Product } from '@/payload-types'

const AddToCartButton = ({
  product
}: {
  product: Product
}) => {
  const { addItem } = useCart()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  
  const [quantity, setQuantity] = useState<boolean>(1)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isSuccess])

  return (
    <>
      <div className='flex justify-center items-center'>
        <Button onClick={()=>setQuantity(quantity-1)} variant="secondary" size="icon">
          -
        </Button>
        <span className="text-lg w-10 text-center">{quantity}</span>                  
        <Button onClick={()=>setQuantity(quantity+1)} variant="secondary" size="icon">
          +
        </Button>
      </div>
      <Button
        onClick={() => {
          addItem(product, quantity)
          setIsSuccess(true)
        }}
        size='lg'
        className='w-full'>
        {isSuccess ? 'Added!' : 'Add to cart'}
      </Button>
    </>
  )
}

export default AddToCartButton
