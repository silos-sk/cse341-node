const express = require('express');
const router = express.Router();
const contacts= require('../controllers/contacts');


router.get('/', contacts.getData);
router.post('/', contacts.createDoc) 
router.route('/:id').get(contacts.getDocById).put(contacts.updateDoc).delete()




module.exports = router;