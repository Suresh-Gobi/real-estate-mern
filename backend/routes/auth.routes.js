const express = require("express");
const { signup, verifyEmail } = require("../controllers.js/auth.controller.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/verify/:otp", verifyEmail);

module.exports = router;
