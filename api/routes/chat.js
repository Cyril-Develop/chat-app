const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");
const multer = require("../middlewares/multer");
const resize = require("../middlewares/resize/image-message");

const chatCtrl = require("../controllers/chat/chat");
const messageCtrl = require("../controllers/chat/message");

router.get("/", checkToken, chatCtrl.getChatRooms);
router.get("/:id", checkToken, chatCtrl.getChatRoom);
router.post("/create", checkToken, chatCtrl.createChatRoom);
router.patch("/room/:roomId/description", checkToken, chatCtrl.updateChatRoom);
router.post('/join', checkToken, chatCtrl.joinChatRoom);
router.post('/leave', checkToken, chatCtrl.leaveChatRoom);
router.delete('/', checkToken, chatCtrl.deleteChatRoom);

//********** MESSAGE ROOM **********/
router.get("/room/:roomId/message", checkToken, messageCtrl.getRoomMessage);
router.post("/room/:roomId/message", checkToken, multer, resize, messageCtrl.sendRoomMessage);
router.delete("/room/message/:messageId", checkToken, messageCtrl.deleteRoomMessage);

//********** MESSAGE PRIVATE **********/
router.get("/private/:contactId/message", checkToken, messageCtrl.getPrivateMessages);
router.post("/private/:contactId/message", checkToken, multer, resize, messageCtrl.sendPrivateMessage);
router.delete("/private/message/:messageId", checkToken, messageCtrl.deletePrivateMessage);
//Gere l'alerte de message non lu
router.get("/private/message/unread", checkToken, messageCtrl.getUnreadMessages);
router.patch("/private/:contactId/message/mark-as-read", checkToken, messageCtrl.markMessagesAsRead);

//********** BOTH **********/
router.patch("/:type/message/:messageId/like", checkToken, messageCtrl.likeMessage);
router.patch("/:type/message/:messageId/dislike", checkToken, messageCtrl.dislikeMessage);

module.exports = router;
