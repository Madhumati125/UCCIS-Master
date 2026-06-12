const express = require("express");
const router = express.Router();

const {
  getReplayEvents,
  getReplayStats
} = require("../controllers/replayController");

router.get("/", getReplayEvents);
router.get("/stats", getReplayStats);

module.exports = router;