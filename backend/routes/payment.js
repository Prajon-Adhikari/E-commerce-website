const express = require("express");
const Payment = require("../model/payment.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const { fullName, address, mobile, cardType, cardNumber, amount } = req.body;
  await Payment.create({
    fullName,
    address,
    mobile,
    cardType,
    cardNumber,
    amount,
  });
  return res.status(200).json({ message: "Payment done successfully" });
});

module.exports = router;
