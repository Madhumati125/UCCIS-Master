const express = require("express");
const router = express.Router();

const {
  getIncidents,
  getIncidentStats
} = require("../controllers/incidentController");

router.get("/", getIncidents);
router.get("/stats", getIncidentStats);

module.exports = router;