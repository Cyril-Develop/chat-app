const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");

const chatCtrl = require("../controllers/chat");

router.get("/", checkToken, chatCtrl.getChatRooms);
router.get("/:id", checkToken, chatCtrl.getChatRoom);
router.post("/create", checkToken, chatCtrl.createChatRoom);
router.post('/join', checkToken, chatCtrl.joinChatRoom);
router.post('/leave', checkToken, chatCtrl.leaveChatRoom);
router.delete('/', checkToken, chatCtrl.deleteChatRoom);

module.exports = router;
