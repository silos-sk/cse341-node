const express = require('express');
const router = express.Router();
const course = require('../controllers/course');

router.get('/', course.getData);
router.route('/:id').get(course.getDocById)

module.exports = router;