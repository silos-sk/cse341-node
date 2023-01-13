const express = require('express');
const router = express.Router();
const home = require('../controllers');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
router.use('/contacts', require('./contacts'))
router.use('/', home.displayName)

module.exports = router;