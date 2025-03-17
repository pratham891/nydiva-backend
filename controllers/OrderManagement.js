import Order from '../models/Order.js';
import User from '../models/User.js';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
dotenv.config();

// Create a new order
export const createOrder = async (req, res) => {
  const { userEmail, items, totalPrice } = req.body;

  const newOrder = new Order({
    orderId: null, // this orderId will be used to verify the payment (not the same as razorpay_orderId received from frontend checkout)
    userId: null, // user's id from db
    items, // refer to Product Model
    totalPrice,
    status: 'Pending'
  });

  try {
    var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });

    const order = await instance.orders.create({
      amount: totalPrice,
      currency: "INR",
    });

    newOrder.orderId = order.id;

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    newOrder.userId = user._id;

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Internal Server error", error: error.message });
  }
};
