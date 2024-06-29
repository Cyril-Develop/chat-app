const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");

const messageCtrl = require("../controllers/message");

router.get("/", checkToken, messageCtrl.getMessages);
router.post("/", checkToken, messageCtrl.sendMessage);
router.delete("/", checkToken, messageCtrl.deleteMessage);

module.exports = router;