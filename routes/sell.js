const router = require('express').Router()
const { newSell, updateSell, getAllSells } = require('../controllers/sellControllers')

router.route('/sell/new').post(newSell)
router.route('/sell/:id').put(updateSell)
router.route('/sell/all').get(getAllSells)

module.exports = router