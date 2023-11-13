const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { sendVerificationEmail } = require("../utils/verificationEmail.js");

const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({ error: "Username already exists" });
    }

    const otp = crypto.randomBytes(3).toString("hex").toUpperCase();

    await sendVerificationEmail(email, otp);

    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashPassword, otp });

    await newUser.save();

    res.status(201).json({ message: "Verification link sent to your email." });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  signup,
};
