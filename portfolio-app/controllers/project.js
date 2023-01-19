const mongodb = require('../db/connect');
const ObjId = require('mongodb').ObjectId;
const Project = require('../models/projectSchema');
const {projSchema} = require('../helpers/validation_schema')

const getData = async (req, res) => {
  try{
    const result = await mongodb.getDb().db('portfolio').collection('projects').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists); 
    });
  } catch (err){
    res.status(400).json({ message: err.message });
  }
  }
    

const getDocById = async (req, res) => {
  const userId = new ObjId(req.params.id);
  try{
    const result = await mongodb
    .getDb()
    .db('portfolio')
    .collection('projects')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
} catch (err){
  res.status(400).json({ message: err.message });
}
}
  

const createDoc = async (req, res) =>{
  const newProject = new Project({
    title: req.body.title,
    websiteUrl: req.body.websiteUrl,
    gitHubUrl: req.body.gitHubUrl,
    techStack: req.body.techStack,
    summary: req.body.summary,
    imgUrl_sm: req.body.imgUrl_sm,
    imgUrl_lg: req.body.imgUrl_lg,
    imgAlt: req.body.imgAlt
  })

  try{
    const validatedProj = await projSchema.validateAsync(newProject.toObject());
    const result = await mongodb
    .getDb()
    .db('portfolio')
    .collection('projects').insertOne(validatedProj);
    res.status(201).json(result);   
  } catch (err){
    res.status(400).json({ message: err.message });
  }
};

const updateDoc = async (req, res) =>{
  const userId = new ObjId(req.params.id);
  const project = {
    title: req.body.title,
    websiteUrl: req.body.websiteUrl,
    gitHubUrl: req.body.gitHubUrl,
    techStack: req.body.techStack,
    summary: req.body.summary,
    imgUrl_sm: req.body.imgUrl_sm,
    imgUrl_lg: req.body.imgUrl_lg,
    imgAlt: req.body.imgAlt
  }

  try{
    const validatedProj = await projSchema.validateAsync(project);
    const result = await mongodb
    .getDb()
    .db('portfolio')
    .collection('projects').replaceOne({ _id: userId }, validatedProj);
    if (result.modifiedCount > 0){
      res.status(204).send(); 
    }else {
      res.status(500).json(result.error || 'An error has occured');
  }} catch (err){
    res.status(500).json({ message: err.message });
  }
};

const removeDoc = async (req, res) =>{
  const userId = ObjId(req.params.id);
  try{
    if(!userId) {
      res.status(400).send({ message: err.message } || 'Please enter a valid ID');
    }
    const result = await mongodb
    .getDb()
    .db('portfolio')
    .collection('projects').deleteOne({ _id: userId }, true);
    if (result.deletedCount > 0){
      res.status(200).send(); 
    }else {
      res.status(500).json(result.error || 'An error has occured');
  }} catch (err){
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
getData, getDocById, createDoc, updateDoc, removeDoc
}; 