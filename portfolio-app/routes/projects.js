const express = require('express');
const router = express.Router();
const projects = require('../controllers/project');
// const checkAuth = require('../helpers/auth')
const auth = require('../middleware/authenticateToken')

router.get('/', projects.getData);
router.post('/', auth.authenticateToken, projects.createDoc) 
router.route('/:id').get(projects.getDocById).put(projects.updateDoc).delete(projects.removeDoc)



module.exports = router;