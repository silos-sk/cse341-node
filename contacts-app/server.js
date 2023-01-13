const express = require('express');
const mongodb = require('./db/connect');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

app
  .use(express.json())
  .use(cors())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.accessDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

