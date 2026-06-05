const express = require("express");

const router = express.Router();

const replayController =
require("../controllers/replayController");

router.post(
  "/generate",
  replayController.generateReplay
);

module.exports = router;