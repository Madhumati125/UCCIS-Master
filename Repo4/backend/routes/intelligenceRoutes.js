const express = require("express");
const router = express.Router();

const {
  getZonesIntelligence,
  getZoneIntelligence
} = require("../controllers/intelligenceController");

router.get("/zones/intelligence", getZonesIntelligence);
router.get("/zone/intelligence", getZoneIntelligence);

module.exports = router;