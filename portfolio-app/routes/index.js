const express = require('express');
const router = express.Router();
const home = require('../controllers');

// Auth0
const { requiresAuth } = require('express-openid-connect');


router.use('/', require('./swagger.js'));
router.use('/projects', require('./projects'))
router.use('/courses', require('./courses'))
router.use('/', home.displayHome)

// //Auth0 route
router.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user))
  });


module.exports = router;