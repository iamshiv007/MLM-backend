const router = require('express').Router()

// User
const user = require('./user')
router.use("/", user)

// Banner
const banner = require('./banner')
router.use("/", banner)

module.exports = router