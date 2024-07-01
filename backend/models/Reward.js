const mongoose = require('mongoose');
const { Schema } = mongoose;

const rewardSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Assuming the User model is named 'User'
        required: true,
    },
    amountAwarded: {
        type: String,
        require: true,
    },
    pointsUsed: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});
const Reward = mongoose.model('reward', rewardSchema);
module.exports = Reward;