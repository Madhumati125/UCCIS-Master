const mongoose = require("mongoose");

const ZoneSchema = new mongoose.Schema({
  zone_name: String,
  city: String,
  traffic_state: String,
  flooding_risk: String,
  complaints: Number,
  confidence_score: Number,
  escalation_state: String
});

module.exports = mongoose.model("Zone", ZoneSchema);