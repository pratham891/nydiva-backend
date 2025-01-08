import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  // stock: {
  //   type: Number,
  //   required: true
  // },
  images: [{
    type: String
  }]
});

const Product = model('Product', productSchema);

export default Product;