import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  cartId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createTime: {
    type: Date,
    required: true,
  },
  payerId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
