const mongoose = require('mongoose');
// shortcut variable
const { Schema } = mongoose;

const commentSchema = new Schema({
    userName: String,
    userAvatar: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    textComments: String
}, {
    // will add and maintain createdAt and updatedAt properties
    timestamps: true
});

const recipeSchema = new Schema({
    recipeName: {
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
    comments: [commentSchema]
});


module.exports = mongoose.model('Recipe', recipeSchema);