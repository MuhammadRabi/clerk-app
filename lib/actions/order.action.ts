'use server'

import { redirect } from 'next/navigation'
import Stripe from 'stripe'
import Order from '../db/models/order'
import { connectToDB } from '../db/db'
import { auth } from '@clerk/nextjs/server'
import { cartItem, Product } from '@/types'

export async function checkoutProduct(cartItems: cartItem[]) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const { userId } = auth()

  const session = await stripe.checkout.sessions.create({
    line_items: cartItems.map((item: any) => ({
      price_data: {
        currency: 'USD',
        unit_amount: item.price * 100,
        product_data: {
          name: item.name,
          description: item.desc
        }
      },
      quantity: item.quantity
    })),
    metadata: {
      //   name: item.name,
      buyerId: userId
    },
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/checkout/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/checkout/cancel`
  })

  redirect(session.url!)
}

// save to db  createOrder
// save the order as buyerId and total price

export async function createOrder(order: any) {
  try {
    await connectToDB()
    const newOrder = await Order.create(order)
    return JSON.parse(JSON.stringify(newOrder))
  } catch (error) {
    throw new Error('can not add the Order to db!')
  }
}
