const Provider = require('../models/provider');

module.exports = {
  create,
  delete: deleteReview
};

function create(req, res) {
    Provider.findById(req.params.id, function(err, provider) {
        // Add the user-centric info to req.body
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        // We can push in subdoc objects into Mongoose arrays
        provider.reviews.push(req.body);
        provider.save(function(err) {
          // Step 5: Respond with a redirect because we've mutated data
          res.redirect(`/providers/${provider._id}`);
        });
      });
}

function deleteReview(req, res) {
    Provider.findOne({'providers._id': req.params.id, 'providers.reviews.userId': req.user._id})
    .then(function(provider) {
      if (!provider) return res.redirect('/providers');
      provider.reviews.remove(req.params.id);
      return review.save();
    })
    .then(function(review) {
      res.redirect(`/providers/${provider._id}`);
    });
}