const User = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

// 1. Create New Usre
exports.createUser = async (req, res) => {
    try {

        const { password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({ ...req.body, password: hashedPassword })

        res.status(201).json({ success: true, message: "User Created", user })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

// 2. All Users
exports.getAllUsers = async (req, res) => {
    try {

        const users = await User.find()

        res.status(200).json({ success: true, users })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}