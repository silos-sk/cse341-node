const express = require('express');
const router = express.Router();
const home = require('../controllers');

router.use('/contacts', require('./contacts'))
router.use('/', home.displayName)

module.exports = router;