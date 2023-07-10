const router = require('express').Router()

// User
const user = require('./user')
router.use("/", user)

// Banner
const banner = require('./banner')
router.use("/", banner)

// Sell
const sell = require('./sell')
router.use("/", sell)

module.exports = router