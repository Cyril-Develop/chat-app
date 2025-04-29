const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");

const adminCtrl = require("../controllers/admin");

router.get("/users", checkToken, adminCtrl.getAllUsers);
router.get("/rooms", checkToken, adminCtrl.getAllRooms);
router.post("/users/:id/block", checkToken, adminCtrl.blockUserAccount);
router.post("/users/:id/unblock", checkToken, adminCtrl.unblockUserAccount);
router.delete("/users/:id/delete", checkToken, adminCtrl.deleteUserAccount);

module.exports = router;
