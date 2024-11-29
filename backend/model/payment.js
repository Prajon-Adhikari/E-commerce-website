const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      minLength: [10, "Number must contains 10 digits"],
      maxLength: [10, "Number must contains 10 digits"],
    },
    cardType: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timeseries: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
