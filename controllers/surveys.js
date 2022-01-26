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
    res.render(`surveys/view2`);
};


function view3(req, res) {
    res.render('surveys/view3');
}



function view3create(req, res) {
    const survey = new Survey(req.body);
    // Add the user-centric info to req.body
    console.log(survey);
    survey.user = req.user._id;
    survey.save(function(err) {
        // Step 5: Respond with a redirect because we've mutated data
        res.redirect(`/surveys/view4/${survey._id}`);
    });
}

function view4(req, res) {
    res.render('surveys/view4', { surveyId: req.params.id });
}

function view4create(req, res) {
    Survey.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, survey) { // this is what we will repeat
        console.log(survey);
        res.redirect(`/surveys/view5/${survey._id}`);
    });
}

function view5(req, res) {

}

function view5create(req, res) {
    Survey.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, survey) { // this is what we will repeat
        console.log(survey);
        res.redirect(`/surveys/view6/${survey._id}`);
    });
}

function view6(req, res) {
    res.redirect('/surveys/view6');
}

function view6create(req, res) {
    Survey.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, survey) { // this is what we will repeat
        console.log(survey);
        res.redirect(`/surveys/view7/${survey._id}`);
    });
}

function view7(req, res) {
    res.redirect('/surveys/view7');
}

function view7create(req, res) {
    Survey.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, survey) { // this is what we will repeat
        console.log(survey);
        res.redirect(`/surveys/view8/${survey._id}`);
    });
}

function view8(req, res) {
    res.redirect('/surveys/view8');
}

function view8create(req, res) {
    Survey.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, survey) { // this is what we will repeat
        console.log(survey);
        res.redirect(`/surveys/view9/${survey._id}`);
    });
}

function view9(req, res) {
    res.redirect('/surveys/view9');
}

function view9create(req, res) {
    Survey.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, survey) { // this is what we will repeat
        console.log(survey);
        res.redirect(`/surveys/view10/${survey._id}`);
    });
}

function view10(req, res) {
    res.redirect('/surveys/view10');
}

function view10create(req, res) {
    Survey.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, survey) { // this is what we will repeat
        console.log(survey);
        res.redirect(`/surveys/view11/${survey._id}`);
    });
}

function view11(req, res) {
    res.redirect('/surveys/view11');
}

function view11create(req, res) {
    Survey.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, survey) { // this is what we will repeat
        console.log(survey);
        res.redirect(`/surveys/view12/${survey._id}`);
    });
}

function view12(req, res) {
    res.redirect('/surveys/view12');
}