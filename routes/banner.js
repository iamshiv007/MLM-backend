const router = require('express').Router()
const { uploadBanner, getAllBanners, deleteBanner } = require('../controllers/bannersController')


const multer = require('multer')

// Image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './banners')
    },
    filename: function (req, file, cb) {
        const newName = Date.now() + '-' + file.originalname
        cb(null, newName)
    }
})

const upload = multer({ storage })

router.route('/banner/new').post(upload.single("bannerImage"), uploadBanner)
router.route('/banner/all').get(getAllBanners)
router.route('/banner/:id').delete(deleteBanner)

module.exports = router