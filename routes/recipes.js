const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');

// This router is mounted to a "starts with" path of '/recipes'
// Providers will be a public route and won't be behind the OAuth
// GET /providers (displays all providers)
router.get('/', recipesCtrl.index);

// GET /providers/new (display a form for entering a new provider)
router.get('/new', recipesCtrl.new);

// GET /providers/:id (display a "show" page for a single provider)
router.get('/:id', recipesCtrl.show);

// POST /providers (handles the new form being submitted)
router.post('/', recipesCtrl.create);



module.exports = router;