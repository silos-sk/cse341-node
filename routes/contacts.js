const express = require('express');
const router = express.Router();
const contacts= require('../controllers/contacts');

router.get('/', contacts.getData);
router.get('/:id', contacts.getDocById);

module.exports = router;