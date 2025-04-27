const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");

const adminCtrl = require("../controllers/admin");

router.delete("/delete/:id", checkToken, adminCtrl.deleteUserAccount);
router.post("/block/:id", checkToken, adminCtrl.blockUserAccount);

module.exports = router;
