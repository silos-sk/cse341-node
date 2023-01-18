const express = require('express');
const router = express.Router();
const projects = require('../controllers/project');


router.get('/', projects.getData);
router.post('/', projects.createDoc) 
router.route('/:id').get(projects.getDocById)

module.exports = router;