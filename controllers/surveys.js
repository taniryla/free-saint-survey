const Survey = require('../models/survey');

module.exports = {
  index,
  new: newSurvey,
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

function newSurvey(req, res) {

}

function create(req, res) {
    
}