const Sell = require('../models/sellSchema')


// 1. New Sell
exports.newSell = async (req, res) => {
    try {

        const sell = await Sell.create(req.body)

        res.status(201).json({ success: true, message: "New Sell Created", sell })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

// 2. Sell Update
exports.updateSell = async (req, res) => {
    try {

        const sell = await Sell.findByIdAndUpdate(req.params.id, req.body)

        if (!sell) {
            return res.status(404).json({ success: false, message: "Sell not Found" })
        }

        res.status(200).json({ success: true, message: "Sell Updated", sell })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

// 3. Get All Sell
exports.getAllSells = async (req, res) => {

    try {

        const sells = await Sell.find().populate("user")

        res.status(200).json({ success: true, sells })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}