const express = require("express");

const router = express.Router();

const {
  createSignal,
  getSignals,
  getSignalById,
  deleteSignal
} = require("../controllers/signalController");

/*
=================================
CREATE SIGNAL
POST /api/signals
=================================
*/
router.post("/", createSignal);

/*
=================================
GET ALL SIGNALS
GET /api/signals
=================================
*/
router.get("/", getSignals);

/*
=================================
GET SIGNAL BY ID
GET /api/signals/:id
=================================
*/
router.get("/:id", getSignalById);

/*
=================================
DELETE SIGNAL
DELETE /api/signals/:id
=================================
*/
router.delete("/:id", deleteSignal);

module.exports = router;