const MongoClient = require('mongodb').MongoClient;
const URI = 'mongodb+srv://danV:danV@cluster0.aysppv9.mongodb.net/?retryWrites=true&w=majority';
let db;
const connectDB = () => {
    MongoClient.connect(URI)
    .then((client) => {
      db = client;
    })
    console.log("database connected.");
}

const getDb = () => {
        if (!db) {
          throw Error('Db not initialized');
        }

    return db;
}

module.exports =  {connectDB, getDb}
