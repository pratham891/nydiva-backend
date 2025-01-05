import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

const CartSchema = new Schema({
  cartId: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true
  },
  items: [
    {
      productId: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model('Cart', CartSchema);