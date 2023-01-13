const routes = require('express').Router();

const prof = require('../controller/professional.js');

routes.get('/', prof.getData);

module.exports = routes;

const express = require('express');

 