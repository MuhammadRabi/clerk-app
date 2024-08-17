/* eslint-disable camelcase */
import { createTransaction } from '@/lib/actions/transaction.action'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
export async function POST(request: Request) {
  const body = await request.text()

  const sig = request.headers.get('stripe-signature') as string
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

  let event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err) {
    return NextResponse.json({ message: 'Webhook error', error: err })
  }

  // Get the ID and type
  const eventType = event.type

  // CREATE
  if (eventType === 'checkout.session.completed') {
    const { id, amount_total, metadata } = event.data.object

    const transaction = {
      stripeId: id,
      name: metadata?.name || '',
      price: amount_total ? amount_total / 100 : 0,
      buyerId: metadata?.buyerId || '',
      createdAt: new Date()
    }

    const newTransaction = await createTransaction(transaction)

    return NextResponse.json({
      message: 'Successful Transaction!',
      transaction: newTransaction
    })
  }

  return new Response('webhook connection is working!', { status: 200 })
}
