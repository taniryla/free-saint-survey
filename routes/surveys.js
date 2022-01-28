var express = require('express');
var router = express.Router();
var surveysCtrl = require('../controllers/surveys');
var isLoggedIn = require('../config/auth');


router.get('/', surveysCtrl.index);

router.get('/view2', isLoggedIn, surveysCtrl.view2)

router.post('/view2', isLoggedIn, surveysCtrl.view2create)

router.get('/view3/:id', isLoggedIn, surveysCtrl.view3)

router.post('/view3', isLoggedIn, surveysCtrl.view3create)

router.get('/view4/:id', isLoggedIn, surveysCtrl.view4)

router.post('/view4/:id', isLoggedIn, surveysCtrl.view4create)

router.get('/view5/:id', isLoggedIn, surveysCtrl.view5)

router.post('/view5/:id', isLoggedIn, surveysCtrl.view5create)

router.get('/view6/:id', isLoggedIn, surveysCtrl.view6)

router.post('/view6/:id', isLoggedIn, surveysCtrl.view6create)

router.get('/view7/:id', isLoggedIn, surveysCtrl.view7)

router.post('/view7/:id', isLoggedIn, surveysCtrl.view7create)

router.get('/view8/:id', isLoggedIn, surveysCtrl.view8)

router.post('/view8/:id', isLoggedIn, surveysCtrl.view8create)

router.get('/view9/:id', isLoggedIn, surveysCtrl.view9)

router.post('/view9/:id', isLoggedIn, surveysCtrl.view9create)

router.get('/view10/:id', isLoggedIn, surveysCtrl.view10)

router.post('/view10/:id', isLoggedIn, surveysCtrl.view10create)

router.get('/view11/:id', isLoggedIn, surveysCtrl.view11)

router.post('/view11/:id', isLoggedIn, surveysCtrl.view11create)

router.get('/view12/:id', isLoggedIn, surveysCtrl.view12)




module.exports = router;