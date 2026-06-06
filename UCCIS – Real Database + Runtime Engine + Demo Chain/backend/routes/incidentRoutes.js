const express = require("express");
const router = express.Router();

const {
  createIncident
} = require("../controllers/incidentController");

router.post("/create", createIncident);

module.exports = router;