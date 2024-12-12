const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PaymentRoute = require("./routes/payment.js");
const UserRoute = require("./routes/user.js");
const ProductRoute = require("./routes/product.js");

const app = express();
const PORT = 3000;

app.use("/uploads", express.static("public/uploads"));

mongoose
  .connect("mongodb://localhost:27017/E-commerce")
  .then((e) => console.log("MongoDB connnected"));

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/payment", PaymentRoute);
app.use("/user", UserRoute);
app.use("/", ProductRoute);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
