const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");

const emailCtrl = require("../controllers/email");

router.post("/notification", checkToken, emailCtrl.sendEmailNotification)
router.post('/contact', emailCtrl.sendEmailContact);

module.exports = router;
