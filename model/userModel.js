const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    googleId: {
        type: String
    },
    gitHubId: {
        type: String
    },
    password: {
        type: String,
        minLength: 8,
        required: True
    },
    username: {
        type: String,
        trim: true,
        lowercase: true,
    }


})

const User = mongoose.model('User', userSchema);
module.exports = User;