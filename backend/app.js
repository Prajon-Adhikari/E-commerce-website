const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PaymentRoute = require("./routes/payment.js");
const UserRoute = require("./model/user.js");

const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/E-commerce")
  .then((e) => console.log("MongoDB connnected"));

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", PaymentRoute);
app.use("/user", UserRoute);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
