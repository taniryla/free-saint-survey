const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
    toppriority: {
        type: [String],
        enum: ['better sleep', 'fewer cravings', 'more energy', 'better mood', 'fit into clothes', 'protect health']
    },
    sexgender: {
        type: String,
        enum: ['male', 'female', 'mtf', 'ftm', 'non-binary bigender', 'self-identify', 'asexual', 'prefer not to say']
    },
    hormonestatus: {
        type: [String],
        enum: ['not using any hormones', 'birth control for pregnancy', 'birth control for symptoms', 'progesterone only', 'I take HRT/estrogen', 'I take TRT/testosterone']
    },
    healthrisks1: {
        type: [String],
        enum: ['heart disease or stroke', 'heavy/polyps', 'endometriosis', 'severe pms', 'pcos or progesterone', 'menopause', 'partial hysterectomy', 'full hysterectomy', 'high blood pressure', 'diabetes', 'nash', 'high cholesterol']
    },
    healthrisks2: {
        type: [String],
        enum: ['imsomnia', 'osteoarthritis', 'kidney disease', 'depression', 'none', 'other (write below'],
    },
    healthriskswritebelow: String,
    topbarrier: {
        type: [String],
        enum: ['busy schedule', 'injury/medical condition', 'low energy', 'nothing works', 'pleateau', 'not a challenge']
    },
    bodyshape: {
        type: String,
        enum: ['average shape', 'curvy', 'apple shape', '45 and losing my shape', '55 and gaining belly fat', 'severely obese']
    },
    height: Number,
    weight: Number,
    targetweight: Number,
    pregnant: Boolean,
    age: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Survey', surveySchema);