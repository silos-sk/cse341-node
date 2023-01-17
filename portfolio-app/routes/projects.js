const express = require('express');
const router = express.Router();
const portfolio = require('../controllers/portfolio');


router.get('/', portfolio.getData);
router.post('/', portfolio.createDoc) 
router.route('/:id').get(portfolio.getDocById)

module.exports = router;