const express = require("express");

const router = express.Router();

const {
  getReplayStatus,
  reconstructReplay
} = require("../controllers/replayController");

/* Replay Status */

router.get(
  "/status",
  getReplayStatus
);

/* Replay Reconstruction POST */

router.post(
  "/reconstruct",
  reconstructReplay
);

/* Temporary Browser Testing Route */

router.get(
  "/reconstruct",
  reconstructReplay
);

module.exports = router;