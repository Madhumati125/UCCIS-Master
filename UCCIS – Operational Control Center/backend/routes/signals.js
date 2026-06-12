const express = require("express");
const router = express.Router();

const {
  getSignals,
  getSignalStats
} = require("../controllers/signalController");

router.get("/", getSignals);
router.get("/stats", getSignalStats);

module.exports = router;