const express = require("express");
const User = require("../model/user.js");

const router = express.Router();

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
