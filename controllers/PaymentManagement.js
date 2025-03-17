import Order from '../models/Order.js';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import crypto from 'crypto';
dotenv.config();

// function to verify payment
export const verifyPayment = async (req, res) => {
  // receive orderId, razorpay_payment_id, razorpay_order_id, razorpay_signature from checkout
  const { orderId, razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

  try {

    // read the required order from the db using orderId
    const order = await Order.findOne({ orderId: orderId });

    // verify the payment using razorpay API
    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(order.orderId + "|" + razorpay_payment_id)
      .digest('hex');

    if (generated_signature == razorpay_signature) {
      res.status(200).json({ message: "Payment verified" });
    } else {
      res.status(403).json({  message: "Payment verification failed" });
    }

  } catch (error) {
    res.status(500).json({ message: "Internal Server error", error: error.message });
  }
}
