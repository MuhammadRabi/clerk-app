'use server'

import { ProductToBuyParams } from '@/types'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'
import Transaction from '../db/models/transaction'
import { connectToDB } from '../db/db'

export async function checkoutProduct(productToBuy: ProductToBuyParams) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  const price = Number(productToBuy.price) * 100

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'USD',
          unit_amount: price,
          product_data: {
            name: productToBuy.name,
            description: productToBuy.desc
          }
        },
        quantity: 1
      }
    ],
    metadata: {
      name: productToBuy.name,
      buyerId: productToBuy.buyerId
      // description: productToBuy.desc
    },
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/server`
  })

  redirect(session.url!)
}

// save to db  createTransaction

export async function createTransaction(transaction: ProductToBuyParams) {
  try {
    await connectToDB()
    const newTransaction = await Transaction.create(transaction)
    return JSON.parse(JSON.stringify(newTransaction))
  } catch (error) {
    throw new Error('can not add the transaction to db!')
  }
}
