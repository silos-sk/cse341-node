const mongodb = require('../db/connect');
const express = require('express');
const app = express();
app.set('view engine', 'ejs')

displayHome = app.get('/', (req, res) => {
    // const data =
    //   'Portfolio App'

    //GITHUB AUTH HOME
    // res.render('login');

    // OIDC HOME
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
  });


  module.exports = {
    displayHome
  };

  // 