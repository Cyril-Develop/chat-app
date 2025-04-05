const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");
const multer = require("../middlewares/multer");
const resize = require("../middlewares/resize/image-profile");

const userCtrl = require("../controllers/user");

router.get("/status", checkToken, userCtrl.isAuthenticated);
router.get("/profile", checkToken, userCtrl.getCurrentUser);
router.get("/profile/:id", checkToken, userCtrl.getUserById);
router.get("/friends", checkToken, userCtrl.getFriends);
router.get("/all", checkToken, userCtrl.getAllUsers);
//********** UPDATE USER **********/
router.patch("/", checkToken, multer, resize, userCtrl.updateUser);
router.patch("/notifications", checkToken, userCtrl.updateNotification);
router.patch("/account", checkToken, userCtrl.updateAccount);
router.delete("/", checkToken, userCtrl.deleteAccount);
router.delete("/delete/:id", checkToken, userCtrl.deleteUserAccount);
//********** FRIEND REQUEST **********/
router.post("/request", checkToken, userCtrl.sendFriendRequest);
router.get("/request", checkToken, userCtrl.getFriendRequest);
router.post("/accept", checkToken, userCtrl.acceptFriendRequest);
router.post("/refuse", checkToken, userCtrl.rejectFriendRequest);

router.delete("/remove", checkToken, userCtrl.removeContact);
router.post("/block", checkToken, userCtrl.blockUser);
router.get("/block", checkToken, userCtrl.getBlockedUsers);
router.delete("/block/:blockedId", checkToken, userCtrl.unblockUser);

module.exports = router;
