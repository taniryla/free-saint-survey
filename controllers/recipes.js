const Survey = require('../models/survey');
const Provider = require('../models/provider');
const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    show,
    create
  };

  function index(req, res) {
    Recipe.find({})
    .then(function (recipes) {
      res.render('recipes/index', { title: 'All Recipes', recipes });
    })
    .catch(function (err) {
      res.redirect('/recipes');
    });
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'Add Recipes' });
}

function show(req, res){
    Recipe.findById(req.params.id, function (err, recipe) {
          res.render('recipes/show', { recipe });
        });
    };


function create() {
  var recipe = new Recipe(req.body);
  recipe.save(function (err) {
    // one way to handle errors
    if (err) return res.redirect('/recipes/new');
    console.log(recipe);
    // for now, redirect right back to new.ejs
    res.redirect(`/recipes/${recipe._id}`);
  });
}