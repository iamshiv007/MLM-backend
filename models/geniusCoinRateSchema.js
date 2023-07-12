const mongoose = require("mongoose");

const geniusCoinRateSchema = mongoose.Schema(
  {
    newRate: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    difference: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("geniusCoinRate", geniusCoinRateSchema);
