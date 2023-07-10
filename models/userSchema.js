const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobileNo: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    referCode: {
        type: String,
        required: true
    },
    wallet: {
        type: Number,
    },
    team: {
        type: String,
    },
    address: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        default: 'Block'
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)