const GeniusCoinRate = require("../models/geniusCoinRateSchema");

// 1. New Genius Coin Rate
exports.newGeniusCoinRate = async (req, res) => {
  try {
    const geniusCoinRate = await GeniusCoinRate.create(req.body);

    res.status(201).json({
      success: true,
      message: "Genius Coin Rate Updated",
      geniusCoinRate,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 2. Get Genius coin History
exports.getGeniusCoinRateHistory = async (req, res) => {
  try {
    const rateHistory = await GeniusCoinRate.find();

    res.status(200).json({ success: true, rateHistory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
