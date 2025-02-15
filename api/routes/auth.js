const express = require("express");
const router = express.Router();

const authCtrl = require("../controllers/auth");

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);
router.post("/send-otp", authCtrl.sendOTP);
router.post("/verify-otp", authCtrl.verifyOTP);

module.exports = router;
