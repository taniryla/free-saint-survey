var express = require('express');
var router = express.Router();
var surveysCtrl = require('../controllers/surveys');
var isLoggedIn = require('../config/auth');

// All routes start with "/surveys"

// Providers will be a public route and won't be behind the OAuth
// GET /surveys (start of the survey funnel and display a form for entering a new survey info into database)
router.get('/', surveysCtrl.index);

// GET /surveys/view2 
router.get('/view2', surveysCtrl.view2)

// POST /surveys/view2 
router.post('/view2', surveysCtrl.view2create)

// GET /surveys/view3 
router.get('/view3', surveysCtrl.view3)

// POST /surveys/view3 
router.post('/view3', surveysCtrl.view3create)

// GET /surveys/view4 
router.get('/view4', surveysCtrl.view4)

// POST /surveys/view3 
router.post('/view4', surveysCtrl.view4create)

// POST /surveys (handles the new form being submitted)
router.post('/', surveysCtrl.create);



module.exports = router;