const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userfName:
    {
        type: String,
        required: true
    },

    userlName:
    {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    userPassword: {
        type: String,
        required: true
    },

    currentDate: {
        type: Date,
        default: Date.now
    },

    role:
    {
        type: String,
        default: "User"
    },

});

module.exports = mongoose.model("userSignup", userSchema);