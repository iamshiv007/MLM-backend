const router = require('express').Router()
const { createUser, getAllUsers, updateUser, deleteUser } = require('../controllers/userControllers')

router.route('/user/new').post(createUser)
router.route('/user/all').get(getAllUsers)
router.route('/user/:id').put(updateUser)
router.route('/user/:id').delete(deleteUser)

module.exports = router