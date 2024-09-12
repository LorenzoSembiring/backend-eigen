const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer()

const AuthController = require('../controller/authController')
const authController = new AuthController();

router.post('/login', upload.none(), authController.login)

module.exports = router;