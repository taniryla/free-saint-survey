const Survey = require('../models/survey');

module.exports = {
  index,
  create
};

function index(req, res) {
  Survey.find({})
  .then(function(surveys) {
    res.render('surveys/index', { surveys });
  })
  .catch(function(err) {
    res.redirect('/surveys');
  });
}

function create(req, res) {
    
}