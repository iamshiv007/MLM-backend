const router = require('express').Router()
const { createUser, getAllUsers, updateUser, deleteUser, getUserById } = require('../controllers/userControllers')

router.route('/user/new').post(createUser)
router.route('/user/all').get(getAllUsers)
router.route('/user/:id').put(updateUser)
router.route('/user/:id').delete(deleteUser)
router.route('/user/:id').get(getUserById)

module.exports = router