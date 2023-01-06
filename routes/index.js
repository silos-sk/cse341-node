const routes = require('express').Router();
const name = require('../controllers/');

routes.get('/', name.displayName);
routes.get('/contacts', name.displayName);

module.exports = routes;