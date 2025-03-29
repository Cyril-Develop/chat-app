const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");
const multer = require("../middlewares/multer");
const resize = require("../middlewares/resize/image-message");

const messageCtrl = require("../controllers/message-private");

router.post("/", checkToken, multer, resize, messageCtrl.sendMessage);
router.get("/", checkToken, messageCtrl.getMessages);
router.get("/unread", checkToken, messageCtrl.getUnreadMessages);
router.patch("/mark-as-read", checkToken, messageCtrl.markMessagesAsRead);
router.delete("/", checkToken, messageCtrl.deleteMessage);

module.exports = router;
