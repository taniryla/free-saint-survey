const Survey = require('../models/survey');

module.exports = {
  index,
  view2,
  view2create,
  view3,
  view3create,
  view4,
  view4create,
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

function view2(req, res) {
  res.render('surveys/view2', { surveys });
}

function view2create(req, res) {
  const survey = new Survey(req.body);
  survey.save(function (err) {
    // one way to handle errors
    if (err) return res.render('surveys/view2');
    console.log(survey);
  res.render(`surveys/view2`, { survey });
});
}

function view3(req, res) {
  res.render('surveys/view3', { surveys });
}

function view3create(req, res) {
  const survey = new Survey(req.body);
  survey.save(function (err) {
    // one way to handle errors
    if (err) return res.render('surveys/view3');
    console.log(survey);
  res.render(`surveys/view3`, { survey });
});
}

function view4(req, res) {
  res.render('surveys/view4', { surveys });
}

function view4create(req, res) {
  const survey = new Survey(req.body);
  survey.save(function (err) {
    // one way to handle errors
    if (err) return res.render('surveys/view4');
    console.log(survey);
  res.render(`surveys/view4`, { survey });
});
}

function create(req, res) {
    
}