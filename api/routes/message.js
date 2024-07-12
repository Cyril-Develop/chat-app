const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");
const multer = require("../middlewares/multer");

const messageCtrl = require("../controllers/message");

router.get("/", checkToken, messageCtrl.getMessages);
router.post("/", checkToken, multer, messageCtrl.sendMessage);
router.delete("/", checkToken, messageCtrl.deleteMessage);

module.exports = router;