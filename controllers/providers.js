const Provider = require('../models/provider');

module.exports = {
  index,
  new: newProvider,
  show,
  create
};

function index(req, res) {
    Provider.find({})
    .then(function (providers) {
      res.render('providers/index', { title: 'All Health Providers', providers });
    })
    .catch(function (err) {
      res.redirect('/providers');
    });
}

function newProvider(req, res) {
    res.render('providers/new', { title: 'Add Health Providers' });
}

function show(req, res){
    Provider.findById(req.params.id, function (err, provider) {
          res.render('providers/show', { provider });
        });
    };


function create() {
  var provider = new Provider(req.body);
  provider.save(function (err) {
    // one way to handle errors
    if (err) return res.redirect('/providers/new');
    console.log(provider);
    // for now, redirect right back to new.ejs
    res.redirect(`/providers/${provider._id}`);
  });
}