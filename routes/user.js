const router = require('express').Router()
const { createUser, getAllUsers } = require('../controllers/userControllers')

router.route('/user/new').post(createUser)
router.route('/user/all').get(getAllUsers)

module.exports = router