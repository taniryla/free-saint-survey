const express = require('express');
const router = express.Router();
const providersCtrl = require('../controllers/providers');
var isLoggedIn = require('../config/auth');

// This router is mounted to a "starts with" path of '/providers'
// Providers will be a public route and won't be behind the OAuth
// GET /providers (displays all providers)
router.get('/', providersCtrl.index);

// GET /providers/new (display a form for entering a new provider)
router.get('/new', providersCtrl.new);

// GET /providers/:id (display a "show" page for a single provider)
router.get('/:id', providersCtrl.show);

// POST /providers (handles the new form being submitted)
router.post('/', providersCtrl.create);



module.exports = router;