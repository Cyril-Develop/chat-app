const express = require("express");
const router = express.Router();
const checkToken = require("../middlewares/check-token");

const notificationCtrl = require("../controllers/notification");

router.post('/subscribe', checkToken, notificationCtrl.saveSubscription);
router.post('/unsubscribe', checkToken, notificationCtrl.removeSubscription);
router.post('/send', notificationCtrl.sendNotification);

module.exports = router;