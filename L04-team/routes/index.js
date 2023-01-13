const routes = require('express').Router();
const temple = require('./temple');

<<<<<<< Updated upstream

routes.use('/temples', temple)
=======
routes.use("/", require("./swagger.js"));
routes.use('/temples', temple);
>>>>>>> Stashed changes
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
    };
    res.send(docData);
  })
);


module.exports = routes;
