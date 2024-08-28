'use client'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger
} from '@/components/ui/sheet'
import { useCart } from '@/context/CartProvider'
import { ShoppingBasket, ShoppingCartIcon, X } from 'lucide-react'
import { checkoutProduct } from '@/lib/actions/transaction.action'

const Cart = () => {
  const { clearCart, cartItems, getCartTotal, removeItem } = useCart()
  const handleCheckout = () => {
    checkoutProduct(cartItems)
  }

  return (
    <Sheet>
      <SheetTrigger className='group relative'>
        <ShoppingCartIcon strokeWidth={2.5} className='cursor-pointer' />
        <div className='absolute -right-3 -top-3 flex size-4 items-center justify-center rounded-full bg-pink-600 p-2.5 text-xs text-white duration-300 group-hover:scale-125'>
          {cartItems.length}
        </div>
      </SheetTrigger>
      <SheetContent className='flex flex-col overflow-y-scroll'>
        <SheetHeader>
          <h2 className='mb-4 text-xl font-bold capitalize'>my cart</h2>
        </SheetHeader>
        <div>
          {cartItems?.length > 0 ? (
            <div className='mb-auto flex flex-col space-y-4'>
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className='flex items-center justify-between gap-4 rounded-sm bg-slate-50 px-4 py-2 dark:bg-slate-900'
                >
                  <div className='size-24 rounded-sm bg-slate-300 dark:bg-slate-800'></div>
                  <div className='flex flex-1 flex-col'>
                    <h3 className='mb-2 font-bold'>{item.name}</h3>
                    <p className='text-sm text-slate-600'>${item.price}</p>
                    <p className='text-sm'>Qty:{item.quantity}</p>
                  </div>
                  <X
                    strokeWidth={3.5}
                    size={24}
                    className='cursor-pointer bg-red-500 p-1 text-white duration-300 hover:scale-110'
                    onClick={() => removeItem(item)}
                  />
                </div>
              ))}

              <div className='flex items-center justify-between gap-4'>
                <span>{cartItems.length} items in your cart</span>
                <Button
                  variant='ghost'
                  className='capitalize'
                  onClick={clearCart}
                >
                  clear cart
                </Button>
              </div>
            </div>
          ) : (
            <div className='flex translate-y-1/2 flex-col items-center justify-center gap-16'>
              <p className='text-center text-xl '>
                You have no products in your cart!
              </p>
              <ShoppingBasket size={98} className='text-blue-100' />
            </div>
          )}
        </div>
        {cartItems?.length > 0 && (
          <SheetFooter>
            <div className='mx-auto flex w-full items-center justify-between gap-12 md:gap-24'>
              <p>Total: ${getCartTotal()} </p>
              <Button className='capitalize' onClick={handleCheckout}>
                checkout
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default Cart
