const mongodb = require('../db/connect');
const express = require('express');
const app = express();
app.set('view engine', 'ejs')

displayHome = app.get('/', (req, res) => {
    // const data =
    //   'Portfolio App'
    res.render('login');
  });


  module.exports = {
    displayHome
  };

  // 