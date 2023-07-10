const mongoose = require("mongoose")

const bannersSchema = mongoose.Schema({
    bannerName: {
        type: String,
        required: true
    },
    bannerImage: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("Benner", bannersSchema)