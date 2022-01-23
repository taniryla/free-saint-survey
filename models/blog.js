const mongoose = require('mongoose');
// shortcut variable
const { Schema } = mongoose;

const blogSchema = new Schema({

});


module.exports = mongoose.model('Blog', blogSchema);