const express = require('express');
const app = express();
const port = 8080;
const conDB = require('./db/connect.js');
const bodyParser = require('body-parser');
const professionalRoutes = require('./routes');

conDB.connectDB();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
  
  app.use('/professional', professionalRoutes);

app.listen(port, () => console.log("Running"));
