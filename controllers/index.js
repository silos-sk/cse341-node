const mongodb = require('../db/connect');

displayName = (req, res) => {
    const data =
      'Granta Park';
    res.status(200).send(data);
  };


  module.exports = {
    displayName
  };