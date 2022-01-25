const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
var isLoggedIn = require('../config/auth');


// This router is mounted to a "starts with" path of '/'

// create POST /providers/:id/reviews create a review for a provider
router.post('/providers/:id/reviews', isLoggedIn, reviewsCtrl.create);

// DELETE /reviews/:id
router.delete('/reviews/:id', isLoggedIn, reviewsCtrl.delete);


module.exports = router;