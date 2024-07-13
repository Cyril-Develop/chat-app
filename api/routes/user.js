const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");
const multer = require("../middlewares/multer");
const resize = require("../middlewares/resize/image-profile");

const userCtrl = require("../controllers/user");

router.get("/", checkToken, userCtrl.getUser);
router.get('/all', checkToken, userCtrl.getAllUsers);
router.patch("/", checkToken, multer, resize, userCtrl.updateUser);
router.patch("/notifications", checkToken, userCtrl.updateNotification);
router.patch("/account", checkToken, userCtrl.updateAccount);
router.delete("/", checkToken, userCtrl.deleteAccount);
router.post('/add', checkToken, userCtrl.addContact);
router.delete('/remove', checkToken, userCtrl.removeContact);

module.exports = router;
