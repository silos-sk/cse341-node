const routes = require('express').Router();

routes.get('/', (req, res)=>{
    res.send('Ella Marce');
});

module.exports = routes;