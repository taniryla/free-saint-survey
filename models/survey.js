const mongoose = require('mongoose');
// shortcut variable
const { Schema } = mongoose;

const surveySchema = new Schema({

});


module.exports = mongoose.model('Survey', surveySchema);