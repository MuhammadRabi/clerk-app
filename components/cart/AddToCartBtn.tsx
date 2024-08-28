import { useCart } from '@/context/CartProvider'
import React from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { Product } from '@/types'

const AddToCartBtn = ({ name, price, id, desc }: Product) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    const productToCart = {
      name,
      price,
      desc,
      id
    }
    addToCart({ ...productToCart, quantity: 1 })
    toast.success(`${name} added to cart!`)
  }

  return (
    <Button className='ml-auto mt-2 w-fit' onClick={handleAddToCart}>
      <ShoppingCart className='mr-2 h-4 w-4' />
      Add to cart
    </Button>
  )
}

export default AddToCartBtn
