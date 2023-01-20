const mongodb = require('../db/connect');
const ObjId = require('mongodb').ObjectId;
const Course = require('../models/courseSchema');

const getData = async (req, res) => {
  try{
    const result = await mongodb.getDb().db('portfolio').collection('courses').find();
    result.toArray().then((lists) => {
      if(err){
        res.status(400).json({ message: err.message });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists); 
    });
  } catch (err){
    res.status(400).json({ message: err.message });
  }
  }

  const getDocById = async (req, res) => {
  if (!ObjId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to find a contact.');
  }
  const courseId = new ObjId(req.params.id);
  try{
    const result = await mongodb
    .getDb()
    .db('portfolio')
    .collection('courses')
    .find({ _id: courseId });
  result.toArray().then((lists) => {
    if(err){
      res.status(400).json({ message: err.message });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
} catch (err){
  res.status(400).json({ message: err.message });
}
}

module.exports = {
getData, getDocById
}; 