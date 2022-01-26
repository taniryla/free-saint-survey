const Survey = require('../models/survey');

module.exports = {
  index,
  view2,
  view2create,
  view3,
  view3create,
  view4,
  view4create,
  view5,
  view5create,
  view6,
  view6create,
  view7,
  view7create,
  view8,
  view8create,
  view9,
  view9create,
  view10,
  view10create,
  view11,
  view11create,
  view12,
  view12create,
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
  res.render('/surveys/view2');
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
  res.render('surveys/view3');
}

function view3create(req, res) {
  const survey = new Survey(req.body);
  survey.save(function (err) {
    // one way to handle errors
    if (err) return res.render('surveys/view3');
    console.log(req.body.toppriorities);
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
    console.log(req.body.sexgender);
  res.render(`surveys/view4`, { survey });
});
}

function view5(req, res) {
  res.render('surveys/view5', { surveys });
}

function view5create(req, res) {
  const survey = new Survey(req.body);
  survey.save(function (err) {
    // one way to handle errors
    if (err) return res.render('surveys/view5');
    console.log(req.body.hormonestatus);
  res.render(`surveys/view5`, { survey });
});
}

function view6(req, res) {
  res.render('surveys/view6', { surveys });
}

function view6create(req, res) {
  const survey = new Survey(req.body);
  survey.save(function (err) {
    // one way to handle errors
    if (err) return res.render('surveys/view6');
    console.log(req.body.healthrisks1);
  res.render(`surveys/view6`, { survey });
});
}

function view7(req, res) {
  res.render('surveys/view7', { surveys });
}

function view7create(req, res) {
  const survey = new Survey(req.body);
  survey.save(function (err) {
    // one way to handle errors
    if (err) return res.render('surveys/view7');
    console.log(req.body.healthrisks2);
  res.render(`surveys/view7`, { survey });
});
}

function view8(req, res) {
  res.render('surveys/view8', { surveys });
}

function view8create(req, res) {
  const survey = new Survey(req.body);
  survey.save(function (err) {
    // one way to handle errors
    if (err) return res.render('surveys/view8');
    console.log(req.body.topbarrier);
  res.render(`surveys/view8`, { survey });
});
}

function view9(req, res) {
  res.render('surveys/view9', { surveys });
}

function view9create(req, res) {
  const survey = new Survey(req.body);
  survey.save(function (err) {
    // one way to handle errors
    if (err) return res.render('surveys/view9');
    console.log(req.body.bodyshape);
  res.render(`surveys/view9`, { survey });
});
}

function view10(req, res) {
  res.render('surveys/view10', { surveys });
}

function view10create(req, res) {
  const survey = new Survey(req.body);
  survey.save(function (err) {
    // one way to handle errors
    if (err) return res.render('surveys/view10');
    console.log(req.body.height);
    console.log(req.body.weight);
    console.log(req.body.targetweight);
  res.render(`surveys/view10`, { survey });
});
}

function view11(req, res) {
  res.render('surveys/view11', { surveys });
}

function view11create(req, res) {
  const survey = new Survey(req.body);
  survey.save(function (err) {
    // one way to handle errors
    if (err) return res.render('surveys/view11');
    console.log(req.body.pregnant);
    console.log(req.body.age);
  res.render(`surveys/view11`, { survey });
});
}

function view12(req, res) {
  res.render('surveys/view12', { surveys });
}

function view12create(req, res) {
  const survey = new Survey(req.body);
  survey.save(function (err) {
    // one way to handle errors
    if (err) return res.render('surveys/view12');
    console.log(survey);
  res.render(`surveys/view12`, { survey });
});
}

function create(req, res) {
    
}