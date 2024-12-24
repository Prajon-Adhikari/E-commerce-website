const express = require("express");
const jwt = require("jsonwebtoken"); // Import jsonwebtoken
const User = require("../model/user.js");

const router = express.Router();
const JWT_SECRET = "Prajon@secretkey123";

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

    const token = jwt.sign(
      {
        id: user._id,
        email: user.userEmail,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "1m" }
    );

    return res.status(200).json({
      message: "Signed In successfully",
      token,
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
  try {
    await User.create({
      userFirstName,
      userLastName,
      userEmail,
      userPassword,
      userMobile,
      role: "user",
    });
    return res.status(200).json({ message: "User register successfully" });
  } catch (error) {
    console.log("Error during signup", error);
    return res.status(500).json({ message: "Server error" });
  }
});

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error verifying token : ", error);
    return res.status(403).json({ message: "Invlalid or experied token" });
  }
};

router.get("/protected", verifyToken, (req, res) => {
  return res.status(200).json({ message: "Access granted", user: req.user });
});

module.exports = router;
