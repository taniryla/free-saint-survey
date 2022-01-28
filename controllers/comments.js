const Recipe = require('../models/recipe');

module.exports = {
    create,
    delete: deleteComment
};

function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        recipe.comments.push(req.body);
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`);
        });
    });
}

function deleteComment(req, res) {
    Recipe.findOne({ 'recipes._id': req.params.id, 'recipes.comments.userId': req.user._id })
        .then(function(recipe) {
            if (!recipe) return res.redirect('/recipes');
            recipe.comments.remove(req.params.id);
            return recipe.save();
        })
        .then(function(recipe) {
            res.redirect(`/recipes/${recipe._id}`);
        });
}