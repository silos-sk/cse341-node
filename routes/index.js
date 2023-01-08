const express = require('express');
const router = express.Router();
const home = require('../controllers');

router.use('/', home.displayName)
router.use('/contacts', require('./contacts'))

module.exports = router;