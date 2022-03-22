const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
    },

})




module.exports = mongoose.model('User', userSchema)