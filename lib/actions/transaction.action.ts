'use server'

import { redirect } from 'next/navigation'
import Stripe from 'stripe'
import Transaction from '../db/models/transaction'
import { connectToDB } from '../db/db'
import { auth } from '@clerk/nextjs/server'
import { cartItem, Product } from '@/types'

// interface Itransaction extends Product {
//   buyerId: string
//   quantity: number
//   stripId: string
// }

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

// save to db  createTransaction

export async function createTransaction(transaction: any) {
  try {
    await connectToDB()
    const newTransaction = await Transaction.create(transaction)
    return JSON.parse(JSON.stringify(newTransaction))
  } catch (error) {
    throw new Error('can not add the transaction to db!')
  }
}
