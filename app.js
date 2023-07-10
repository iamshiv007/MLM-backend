const express = require("express")
const app = express()
const dotenv = require('dotenv').config()

app.use(express.json())

// database
const connectdb = require('./connection/connect')
connectdb()

// Routes
const router = require('./routes/router')
app.use('/api', router)

const port = process.env.PORT || 6000

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})

app.get("/", (req, res) => {
    res.status(201).json({ message: "Test Success" })
})