import { model, models, Schema } from 'mongoose'

const OrderSchema = new Schema(
  {
    stripeId: {
      type: String,
      required: true,
      unique: true
    },
    orderTotalAmount: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

const Order = models?.Order || model('Order', OrderSchema)

export default Order
