const Provider = require('../models/provider');

module.exports = {
    index,
    new: newProvider,
    show,
    create
};

function index(req, res) {
    Provider.find({})
        .then(function(providers) {
            res.render('providers/index', { title: 'All Health Providers', providers });
        })
        .catch(function(err) {
            res.redirect('/providers');
        });
}

function newProvider(req, res) {
    res.render('providers/new', { title: 'Add Health Providers' });
}

function show(req, res) {
    Provider.findById(req.params.id, function(err, provider) {
        res.render('providers/show', { provider });
    });
};


function create(req, res) {
    var provider = new Provider(req.body);
    provider.save(function(err) {
        if (err) return res.redirect('/providers/new');
        console.log(provider);
        res.redirect(`/providers/${provider._id}`);
    });
}