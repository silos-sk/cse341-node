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

const updateDoc = async (req, res) =>{
  const userId = new ObjId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }

  try{
    const result = await mongodb
    .getDb()
    .db('personal')
    .collection('contacts').replaceOne({ _id: userId }, contact);
    if (result.modifiedCount > 0){
      res.status(204).send(); 
    }else {
      res.status(500).json(result.error || 'An error has occured');
  }} catch (err){
    res.status(500).json({ message: err.message });
  }
};

const removeDoc = async (req, res) =>{
  const userId = new ObjId(req.params.id);
  try{
    const result = await mongodb
    .getDb()
    .db('personal')
    .collection('contacts').remove({ _id: userId }, true);
    if (result.deletedCount > 0){
      res.status(200).send(); 
    }else {
      res.status(500).json(result.error || 'An error has occured');
  }} catch (err){
    res.status(500).json({ message: err.message });
  }
};

// Middleware - not used yet - still studying application
async function getContact(req, res, next){
  let contactPerson
  try {
    contactPerson = await Contact.findById(req.params.id)
    if (contactPerson == null){
      return res.status(404).json({ message: 'Cannot find contact' })
    }
  } catch(err){
    return res.status(500).json({ message: err.message })
  }

  res.contactPerson = contactPerson
  next()
}



module.exports = {
getData, getDocById, createDoc, updateDoc, removeDoc, getContact
}; 