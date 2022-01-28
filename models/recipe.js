const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    userName: String,
    userAvatar: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String
}, {
    timestamps: true
});

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Vegan', 'Keto', 'Mediterranean', 'Golo', 'Pegan', 'Prolon'],
        required: true
    },
    fullrecipe: String,
    comments: [commentSchema]
});


module.exports = mongoose.model('Recipe', recipeSchema);