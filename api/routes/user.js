const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");

const userCtrl = require("../controllers/user");

router.get("/", checkToken, userCtrl.getUser);
router.put("/", checkToken, userCtrl.updateUser);
router.patch("/email", checkToken, userCtrl.updateEmail);
router.delete("/", checkToken, userCtrl.deleteAccount);

module.exports = router;
