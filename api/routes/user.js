const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");

const userCtrl = require("../controllers/user");

router.get("/", checkToken, userCtrl.getUser);
router.delete("/", checkToken, userCtrl.deleteAccount);

module.exports = router;
