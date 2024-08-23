'use client'
import { ProductToBuyParams } from '@/types'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { checkoutProduct } from '@/lib/actions/transaction.action'
import { loadStripe } from '@stripe/stripe-js'

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

//  this component will be moved to cart component to checkout the array of total added products

const Checkout = ({ name, price, desc, buyerId }: ProductToBuyParams) => {
  const handleCheckout = () => {
    const productToBuy = {
      name,
      price,
      desc,
      buyerId
    }
    // productToBuy will represent the total products [cartItems] in the cart [consumed from contextApi]
    checkoutProduct(productToBuy)
  }

  return (
    <Button className='ml-auto mt-2 w-fit' onClick={handleCheckout}>
      <ShoppingCart className='mr-2 h-4 w-4' />
      Buy Now
    </Button>
  )
}

export default Checkout
