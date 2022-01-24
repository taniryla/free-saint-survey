var express = require('express');
var router = express.Router();
var surveysCtrl = require('../controllers/surveys');
var isLoggedIn = require('../config/auth');

// All routes start with "/surveys"

// Providers will be a public route and won't be behind the OAuth
// GET /surveys (start of the survey funnel and display a form for entering a new survey info into database)
router.get('/', surveysCtrl.index);

// POST /surveys (handles the new form being submitted)
router.post('/', surveysCtrl.create);



module.exports = router;