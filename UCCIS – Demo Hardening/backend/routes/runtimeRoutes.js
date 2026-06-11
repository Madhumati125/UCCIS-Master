const express = require("express");
const router = express.Router();

const {
  getRuntimeLogs,
  getReplayEvents,
  getTraceLogs
} = require("../controllers/runtimeController");

router.get("/logs", getRuntimeLogs);

router.get("/replay", getReplayEvents);

router.get("/trace/:traceId", getTraceLogs);

module.exports = router;