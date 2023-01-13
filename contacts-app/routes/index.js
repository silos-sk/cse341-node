const express = require('express');
const router = express.Router();
const home = require('../controllers');

<<<<<<< Updated upstream
=======
router.use('/', require('./swagger.js'));
>>>>>>> Stashed changes
router.use('/contacts', require('./contacts'))
router.use('/', home.displayName)

module.exports = router;