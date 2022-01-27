const mongoose = require('mongoose');
// shortcut variable
const { Schema } = mongoose;
const statesArray = ["", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];


const reviewSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: String,
    userAvatar: String
}, {
    // will add and maintain createdAt and updatedAt properties
    timestamps: true
});

const providerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true,
        enum: ['Endocrinologist', 'Nutritionist', 'Health Coach', 'Accupunturist', 'Personal Trainer', 'Embodiment Coach', 'Sleep Expert']
    },
    url: String,
    address: {
        street1: String,
        street2: String,
        city: String,
        state: {
            type: String,
            enum: statesArray
        },
        zip: Number
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('Provider', providerSchema);