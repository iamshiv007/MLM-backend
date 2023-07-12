const { newGeniusCoinRate, getGeniusCoinRateHistory } = require('../controllers/geniusCoinRateControllers')

const router = require('express').Router()

router.route('/geniusCoinRate/new').post(newGeniusCoinRate)
router.route('/geniusCoinRate/history').get(getGeniusCoinRateHistory)

module.exports = router