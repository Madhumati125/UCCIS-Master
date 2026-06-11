const express = require("express");
const router = express.Router();

const {
  getDashboardKPIs,
  getScenarioSummary,
  getRuntimeHealth,
  getLatestIncidents
} = require("../controllers/dashboardController");

router.get("/kpis", getDashboardKPIs);

router.get("/scenarios", getScenarioSummary);

router.get("/health", getRuntimeHealth);

router.get("/incidents", getLatestIncidents);

module.exports = router;