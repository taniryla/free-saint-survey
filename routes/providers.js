const express = require('express');
const router = express.Router();
const providersCtrl = require('../controllers/providers');
var isLoggedIn = require('../config/auth');

router.get('/', providersCtrl.index);

router.get('/new', providersCtrl.new);

router.get('/:id', providersCtrl.show);

router.post('/', providersCtrl.create);



module.exports = router;