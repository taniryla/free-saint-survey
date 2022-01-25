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

// POST /surveys/view4
router.post('/view4', surveysCtrl.view4create)

// GET /surveys/view5 
router.get('/view5', surveysCtrl.view5)

// POST /surveys/view5
router.post('/view5', surveysCtrl.view5create)

// GET /surveys/view6 
router.get('/view6', surveysCtrl.view6)

// POST /surveys/view6
router.post('/view6', surveysCtrl.view6create)

// GET /surveys/view7 
router.get('/view7', surveysCtrl.view7)

// POST /surveys/view6
router.post('/view7', surveysCtrl.view7create)

// GET /surveys/view8 
router.get('/view8', surveysCtrl.view8)

// POST /surveys/view8
router.post('/view8', surveysCtrl.view8create)

// GET /surveys/view9 
router.get('/view9', surveysCtrl.view9)

// POST /surveys/view9
router.post('/view9', surveysCtrl.view9create)

// POST /surveys (handles the new form being submitted)
router.post('/', surveysCtrl.create);



module.exports = router;