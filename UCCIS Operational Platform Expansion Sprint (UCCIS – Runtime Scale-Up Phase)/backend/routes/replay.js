const express = require("express");

const router = express.Router();

const {
  getReplays,
  getReplayByTrace,
} = require("../controllers/replayController");

router.get("/", getReplays);

router.get("/:traceId", getReplayByTrace);

module.exports = router;