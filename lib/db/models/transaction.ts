import { model, models, Schema } from 'mongoose'

const TransactionSchema = new Schema({
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
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Transaction =
  models?.Transaction || model('Transaction', TransactionSchema)

export default Transaction
