const mongodb = require('../db/connect');

displayHome = (req, res) => {
    const data =
      'Portfolio App'
    res.status(200).send(data);
  };


  module.exports = {
    displayHome
  };

  // 