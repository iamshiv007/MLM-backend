const mongoose = require("mongoose")

const sellSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    coins: {
        type: Number,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Sell", sellSchema)