const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./libs/db.js");
const PaymentRoute = require("./routes/payment.js");
const UserRoute = require("./routes/user.js");
const ProductRoute = require("./routes/product.js");

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use("/uploads", express.static("public/uploads"));

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
  connectDB();
});

app.use("/payment", PaymentRoute);
app.use("/user", UserRoute);
app.use("/", ProductRoute);
