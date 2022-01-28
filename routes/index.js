var express = require('express');
var router = express.Router();
var isLoggedIn = require('../config/auth');
var passport = require('passport');


router.get('/', function(req, res) {
    res.render('index');
});

router.get('/auth/google', passport.authenticate(
    'google', {
        scope: ['profile', 'email'],
        prompt: 'select_account'
    }
));

router.get('/oauth2callback', passport.authenticate(
    'google', {
        successRedirect: '/surveys',
        failureRedirect: '/surveys'
    }
));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/surveys');
});

module.exports = router;