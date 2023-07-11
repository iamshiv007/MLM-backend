const User = require('../models/userSchema')
const bcrypt = require('bcrypt')

// 1. Create New Usre
exports.createUser = async (req, res) => {
    try {

        const { password, confirmPassword } = req.body

        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, message: "Password does not match" })
        }

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

// 3. Update User
exports.updateUser = async (req, res) => {
    try {

        if (req.body.password) {

            if (req.body.password !== req.body.confirmPassword) {
                return res.status(400).json({ success: false, message: "Password does not match" })
            }

            const hashedPassword = await bcrypt.hash(req.body.password, 10)

            const user = await User.findByIdAndUpdate(req.params.id, { ...req.body, password: hashedPassword })

            if (!user) {
                return res.status(404).json({ success: false, message: "User Not Found" })
            }

            return res.status(200).json({ success: true, message: "Password Updated", user })

        }

        const user = await User.findByIdAndUpdate(req.params.id, req.body)

        if (!user) {
            return res.status(404).json({ success: false, message: "User Not Found" })
        }

        res.status(200).json({ success: true, message: "User Updated", user })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

// 4. Delete User
exports.deleteUser = async (req, res) => {
    try {

        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).json({ success: false, message: "User Not Found" })
        }

        res.status(200).json({ success: true, message: "User Deleted", user })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

// 5. Get User by Id
exports.getUserById = async (req, res) => {
    try {

        const user = await User.findById(req.params.id)

        if (!user) {
            return res.status(404).json({ success: false, message: "User Not Found" })
        }

        res.status(200).json({ success: true, user })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}