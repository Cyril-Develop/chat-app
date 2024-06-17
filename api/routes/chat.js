const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");

const chatCtrl = require("../controllers/chat");

router.post("/create", checkToken, chatCtrl.createChatRoom);
router.post('/join', checkToken, chatCtrl.joinChatRoom);

module.exports = router;
