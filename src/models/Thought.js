const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true, 
        maxlength: 200,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Thought = mongoose.model(' Thought', thoughtSchema);

module.exports = Thought;