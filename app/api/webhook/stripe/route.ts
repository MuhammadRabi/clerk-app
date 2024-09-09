/* eslint-disable camelcase */
import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createOrder } from '@/lib/actions/order.action'

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
    console.log(event)
    const { id, amount_total } = event.data.object
    const order = {
      stripeId: id,
      orderTotalAmount: amount_total ? amount_total / 100 : 0
    }

    // to be fixed!

    const newOrder = await createOrder(order)
    return NextResponse.json({
      message: 'Successful Order!',
      order: newOrder
    })
  }

  return new Response('webhook connection is working!', { status: 200 })
}
