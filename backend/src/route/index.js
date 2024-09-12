const express = require('express');
const router = express.Router();

const memberRoute = require('./memberRoute');
const authRoute = require('./authRoute');
const bookRoute = require('./bookRoute');

router.use('/member', memberRoute);
router.use('/auth', authRoute);
router.use('/book', bookRoute);

module.exports = router;