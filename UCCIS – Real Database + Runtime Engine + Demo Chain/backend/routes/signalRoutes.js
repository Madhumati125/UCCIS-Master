const express = require("express");
const router = express.Router();

const {
  createSignal
} = require("../controllers/signalController");

router.post("/create", createSignal);

module.exports = router;