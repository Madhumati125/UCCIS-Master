const express = require("express");
const router = express.Router();

const {
  getReplay
} = require("../controllers/replayController");

router.get(
  "/replay/:traceId",
  getReplay
);

module.exports = router;