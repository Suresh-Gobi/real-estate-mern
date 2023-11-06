const express = require("express");
const { test } = require("../controllers.js/user.controllers"); // Use require here

const router = express.Router();

router.get("/test", test);

module.exports = router; // Use module.exports for CommonJS
