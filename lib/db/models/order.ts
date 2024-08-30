import { model, models, Schema } from 'mongoose'

const OrderSchema = new Schema({
  stripeId: {
    type: String,
    required: true,
    unique: true
  },
  buyerId: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Order = models?.Order || model('Order', OrderSchema)

export default Order
