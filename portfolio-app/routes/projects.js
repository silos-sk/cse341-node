const express = require('express');
const router = express.Router();
const projects = require('../controllers/project');
// const checkAuth = require('../helpers/auth')
const auth = require('../middleware/authenticateToken')

// Auth0
const { requiresAuth } = require('express-openid-connect');

router.get('/', projects.getData);

// auth try
// router.post('/', auth.authenticateToken, projects.createDoc) 

// Auth0
router.post('/', requiresAuth(), projects.createDoc) 

router.route('/:id').get(projects.getDocById).put(projects.updateDoc).delete(projects.removeDoc)



module.exports = router;