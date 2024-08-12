import { model, models, Schema } from 'mongoose'

const TransactionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  buyerId: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  stripeId: {
    type: String,
    required: true,
    unique: true
  }
})

const Transaction =
  models?.Transaction || model('Transaction', TransactionSchema)

export default Transaction
