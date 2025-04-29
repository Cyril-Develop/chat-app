const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");
const checkBlockedUser = require("../middlewares/check-blocked-user");
const multer = require("../middlewares/multer");
const resize = require("../middlewares/resize/image-profile");

const userCtrl = require("../controllers/user");

router.get("/status", checkToken, userCtrl.isAuthenticated);
router.get("/profile", checkToken, userCtrl.getCurrentUser);
router.get("/:id/profile", checkToken, userCtrl.getUserById);
router.get("/friends", checkToken, userCtrl.getFriends);
router.get("/all", checkToken, userCtrl.getAllUsers);
//********** UPDATE USER **********/
router.patch("/", checkToken, multer, resize, checkBlockedUser, userCtrl.updateUser);
router.patch("/notifications", checkToken, checkBlockedUser, userCtrl.updateNotification);
router.patch("/account", checkToken, checkBlockedUser, userCtrl.updateAccount);
router.delete("/", checkToken, checkBlockedUser, userCtrl.deleteAccount);
//********** FRIEND REQUEST **********/
router.post("/:receiverId/request", checkToken, checkBlockedUser, userCtrl.sendFriendRequest);
router.get("/request", checkToken, userCtrl.getFriendRequest);
router.post("/:contactId/accept", checkToken, checkBlockedUser, userCtrl.acceptFriendRequest);
router.post("/:contactId/refuse", checkToken, checkBlockedUser, userCtrl.rejectFriendRequest);

router.delete("/:contactId/remove", checkToken, checkBlockedUser, userCtrl.removeContact);
router.post("/:contactId/block", checkToken, checkBlockedUser, userCtrl.blockUser);
router.delete("/:contactId/unblock", checkToken, checkBlockedUser, userCtrl.unblockUser);
router.get("/block", checkToken, userCtrl.getBlockedUsers);

module.exports = router;
