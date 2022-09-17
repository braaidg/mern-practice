const express = require("express");

// COntrollers functions
const { signupUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// LOGIN route
router.post("/login", loginUser);

// SIGN UP route
router.post("/signup", signupUser);

module.exports = router;
