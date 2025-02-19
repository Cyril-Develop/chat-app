const express = require("express");
const router = express.Router();

const chatCtrl = require("../controllers/contact");

router.post('/', chatCtrl.sendEmail);

module.exports = router;