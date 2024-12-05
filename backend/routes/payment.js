const express = require("express");
const Payment = require("../model/payment.js");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { fullName, address, mobile, cardType, cardNumber, amount } =
      req.body;
    await Payment.create({
      fullName,
      address,
      mobile,
      cardType,
      cardNumber,
      amount,
    });
    return res.status(200).json({ message: "Payment done successfully" });
  } catch (error) {
    console.error("Error creating payment:", error);
    return res
      .status(500)
      .json({ message: "Payment failed", error: error.message });
  }
});

module.exports = router;
