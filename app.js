const express = require("express")
const app = express()
const dotenv = require('dotenv').config()

const port = process.env.PORT || 6000

// database
const connectdb = require('./connection/connect')
connectdb()

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})

app.get("/", (req, res) => {
    res.status(201).json({ message: "Test Success" })
})