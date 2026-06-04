const mongoose = require("mongoose");

const SignalSchema = new mongoose.Schema({
  signal_type: String,
  zone: String,
  value: String,
  confidence: Number,
  source: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Signal", SignalSchema);