const express = require('express');
const router = express.Router();
const home = require('../controllers');

router.use('/', require('./swagger.js'));
router.use('/projects', require('./projects'))
router.use('/', home.displayHome)

module.exports = router;