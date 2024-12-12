const mongoose = require("mongoose");

const blogSchmema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    blogHeading: {
      type: String,
      required: true,
      maxLength: [50, "Heading cannot contain more than 50 character"],
    },
    blogMessage: {
      type: String,
      required: true,
    },
    userName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    likeCount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("blog", blogSchmema);

module.exports = Blog;
