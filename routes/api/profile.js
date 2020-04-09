const express = require('express');

const router = express.Router();

// @route    POST api/profile
// @desc     Register user
// @access   Public
router.get('/', (req, res) => res.send('User profile'));

module.exports = router;