const mongodb = require('../db/connect');
const ObjId = require('mongodb').ObjectId;

const getData = async (req, res, next) => {
    const result = await mongodb.getDb().db('personal').collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists); 
    });
  };

const getDocById = async (req, res, next) => {
  const userId = new ObjId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('personal')
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = {
getData, getDocById
}; 