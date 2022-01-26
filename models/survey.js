const mongoose = require('mongoose');
// shortcut variable
const { Schema } = mongoose;

const surveySchema = new Schema({
    toppriority: {
        type: String,
        required: true,
        enum: ['better sleep', 'fewer cravings', 'more energy', 'better mood', 'fit into clothes', 'protect health']
    },
    sexgender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'mtf', 'ftm', 'non-binary bigender', 'self-identify', 'asexual', 'prefer not to say']
    },
    hormonestatus: {
        type: String,
        required: true,
        enum: ['not using any hormones', 'birth control for pregnancy', 'birth control for symptoms', 'progesterone only', 'I take HRT/estrogen', 'I take TRT/testosterone']
    },
    healthrisks1: {
        type: String,
        required: true,
        enum: ['heart disease or stroke', 'heavy/polyps', 'endometriosis', 'severe pms', 'pcos or progesterone', 'menopause', 'partial hysterectomy', 'full hysterectomy', 'high blood pressure', 'diabetes', 'nash', 'high cholesterol']
    },
    healthrisks2: {
        type: String,
        required: true,
        enum: ['imsomnia', 'osteoarthritis', 'kidney disease', 'depression', 'none', 'other (write below'],
        healthRisksWriteBelow: String
    },
    topbarrier: {
        type: String,
        required: true,
        enum: ['busy schedule', 'injury/medical condition', 'low energy', 'nothing works', 'pleateau', 'not a challenge']
    },
    bodyshape: {
        type: String,
        required: true,
        enum: ['average shape', 'curvy', 'apple shape', '45 and losing my shape', '55 and gaining belly fat', 'severely obese']
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    targetweight: {
        type: Number,
        required: true
    },
    pregnant: {
        type: Boolean,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    // will add and maintain createdAt and updatedAt properties
    timestamps: true
});

module.exports = mongoose.model('Survey', surveySchema);