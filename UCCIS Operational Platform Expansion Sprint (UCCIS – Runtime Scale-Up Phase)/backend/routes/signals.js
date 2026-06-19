const express = require("express");

const router = express.Router();

const {
  getSignals,
  getSignalById,
} = require("../controllers/signalController");

router.get("/", getSignals);

router.get("/:id", getSignalById);

module.exports = router;