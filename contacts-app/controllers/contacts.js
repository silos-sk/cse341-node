const { response } = require('express');
const mongodb = require('../db/connect');
const ObjId = require('mongodb').ObjectId;
const Contact = require('../models/contactSchema');

const getData = async (req, res) => {
    const result = await mongodb.getDb().db('personal').collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists); 
    });
  };

const getDocById = async (req, res) => {
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

const createDoc = async (req, res) =>{
  const newContact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  })

  try{
    const result = await mongodb
    .getDb()
    .db('personal')
    .collection('contacts').insertOne(newContact);
    res.status(201).json(result);   
  } catch (err){
    res.status(400).json({ message: err.message });
  }
};


module.exports = {
getData, getDocById, createDoc, updateDoc
}; 