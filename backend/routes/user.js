const express = require("express");
const User = require("../model/user.js");

const router = express.Router();

router.post("/signin", async (req, res) => {
  const { userEmail, userPassword } = req.body;

  try {
    const user = await User.findOne({ userEmail });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.userPassword !== userPassword) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    return res
      .status(200)
      .json({
        message: "Signed In successfully",
        userName: user.userFirstName,
      });
  } catch (error) {
    console.error("Error during sign-in:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

router.post("/signup", async (req, res) => {
  const { userFirstName, userLastName, userEmail, userPassword, userMobile } =
    req.body;
  await User.create({
    userFirstName,
    userLastName,
    userEmail,
    userPassword,
    userMobile,
  });
  return res.status(200).json({ message: "User register successfully" });
});

module.exports = router;
