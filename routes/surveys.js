var express = require('express');
var router = express.Router();
var surveysCtrl = require('../controllers/surveys');
var isLoggedIn = require('../config/auth');

// All routes start with "/surveys"

// Providers will be a public route and won't be behind the OAuth
// GET /surveys (start of the survey funnel and display a form for entering a new survey info into database)
router.get('/', surveysCtrl.index);

// GET /surveys/view2 
router.get('/view2', isLoggedIn, surveysCtrl.view2)

// POST /surveys/view2 
router.post('/view2', isLoggedIn, surveysCtrl.view2create)

// GET /surveys/view3
router.get('/view3', isLoggedIn, surveysCtrl.view3)


// POST /surveys/view3 
router.post('/view3', isLoggedIn, surveysCtrl.view3create)

// GET /surveys/view4/
router.get('/view4/:id', isLoggedIn, surveysCtrl.view4)

// POST /surveys/view4/:id
router.post('/view4/:id', isLoggedIn, surveysCtrl.view4create)

// GET /surveys/view5 
router.get('/view5/:id', isLoggedIn, surveysCtrl.view5)

// POST /surveys/view5/:id
router.post('/view5/:id', isLoggedIn, surveysCtrl.view5create)

// GET /surveys/view6 
router.get('/view6/:id', isLoggedIn, surveysCtrl.view6)

// POST /surveys/view6
router.post('/view6/:id', isLoggedIn, surveysCtrl.view6create)

// GET /surveys/view7 
router.get('/view7/:id', isLoggedIn, surveysCtrl.view7)

// POST /surveys/view6
router.post('/view7/:id', isLoggedIn, surveysCtrl.view7create)

// GET /surveys/view8 
router.get('/view8', isLoggedIn, surveysCtrl.view8)

// POST /surveys/view8
router.post('/view8', isLoggedIn, surveysCtrl.view8create)

// GET /surveys/view9 
router.get('/view9', isLoggedIn, surveysCtrl.view9)

// POST /surveys/view9
router.post('/view9', isLoggedIn, surveysCtrl.view9create)

// GET /surveys/view10 
router.get('/view10', isLoggedIn, surveysCtrl.view10)

// POST /surveys/view10
router.post('/view10', isLoggedIn, surveysCtrl.view10create)

// GET /surveys/view11 
router.get('/view11', isLoggedIn, surveysCtrl.view11)

// POST /surveys/view11
router.post('/view11', isLoggedIn, surveysCtrl.view11create)

// GET /surveys/view12 
router.get('/view12', isLoggedIn, surveysCtrl.view12)




module.exports = router;