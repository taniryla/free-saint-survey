var express = require('express');
var router = express.Router();
var surveysCtrl = require('../controllers/surveys');
var isLoggedIn = require('../config/auth');

// All routes start with "/surveys"