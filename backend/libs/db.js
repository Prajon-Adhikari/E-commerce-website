const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log(`Using DB: ${conn.connection.name}`);
  } catch (error) {
    console.log("Error on connecting database : ", error);
  }
};

module.exports = connectDB;
