var express = require('express');
var router = express.Router();

const userController = require('../controller/user.controller')

/* GET home page. */
router.post('/send-otp', userController.sendOtp)
router.post('/verify-otp', userController.verifyOtp)


module.exports = router;
