const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// This router is mounted to a "starts with" path of '/'


// create POST /recipes/:id/comments create a comment for a recipe
router.post('/recipes/:id/comments', commentsCtrl.create);

// DELETE /comments/:id
router.delete('/comments/:id', commentsCtrl.delete);


module.exports = router;