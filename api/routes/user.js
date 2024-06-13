const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");
const multer = require("../middlewares/multer");
const resize = require("../middlewares/resize");

const userCtrl = require("../controllers/user");

router.get("/", checkToken, userCtrl.getUser);
router.patch("/", checkToken, multer, resize, userCtrl.updateUser);
router.patch("/email", checkToken, userCtrl.updateEmail);
router.delete("/", checkToken, userCtrl.deleteAccount);

module.exports = router;
