'use client'

import { cartItem } from '@/types'
import { createContext, useContext, useEffect, useState } from 'react'

interface CartContextType {
  cartItems: cartItem[]
  addToCart: (item: cartItem) => void
  removeItem: (item: cartItem) => void
  getCartTotal: () => string
  clearCart: () => void
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeItem: () => {},
  getCartTotal: () => '0',
  clearCart: () => {}
})

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<cartItem[]>([])

  useEffect(() => {
    const localCartItems = localStorage.getItem('cartItems')
    if (localCartItems) {
      setCartItems(JSON.parse(localCartItems))
    }
  }, [])

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
  }, [cartItems])

  const addToCart = (item: cartItem) => {
    const isCartItem = cartItems.find(cartItem => cartItem.id === item.id)

    if (isCartItem) {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }
  }

  const removeItem = (item: cartItem) => {
    const isCartItem = cartItems.find(cartItem => cartItem.id === item.id)
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))
    // more functionality to be added if more than one item of the same product
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeItem, clearCart, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

export const useCart = () => useContext(CartContext)
