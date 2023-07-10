const Banner = require('../models/bannersSchema')
const fs = require('fs');

// 1. Upload new banner
exports.uploadBanner = async (req, res) => {

    const { bannerName } = req.body
    const bannerImage = req.file.filename

    try {

        const banner = await Banner.create({ bannerName, bannerImage })

        res.status(201).json({ success: true, message: "Banner Uploaded", banner })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

// 2. Get all Banners
exports.getAllBanners = async (req, res) => {
    try {

        const banners = await Banner.find()

        res.status(200).json({ success: true, banners })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

// 3. Delete Banner
exports.deleteBanner = async (req, res) => {

    try {

        const banner = await Banner.findByIdAndDelete(req.params.id)

        if (!banner) {
            return res.status(404).json({ success: false, message: "Banner not Found" })
        }

        const fileName = banner.bannerImage

        fs.unlink(`./banners/${fileName}`, (err) => {
            if (err) {
                console.error(`Error deleting file: ${err}`);
                return;
            }
        });

        res.status(500).json({ success: true, message: "Banner Deleted" })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}