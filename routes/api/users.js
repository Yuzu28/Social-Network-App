const express = require('express');

const router = express.Router();

// @route    POST api/users
// @desc     Register user
// @access   Public
router.get('/', (req, res) => res.send('User route'));

module.exports = router;