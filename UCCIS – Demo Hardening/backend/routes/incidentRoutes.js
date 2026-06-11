const express = require("express");

const router = express.Router();

const {
  getIncidents,
  getIncidentById,
  updateIncidentStatus,
  deleteIncident
} = require("../controllers/incidentController");

/*
=========================================
GET ALL INCIDENTS
GET /api/incidents
=========================================
*/
router.get("/", getIncidents);

/*
=========================================
GET INCIDENT BY ID
GET /api/incidents/:id
=========================================
*/
router.get("/:id", getIncidentById);

/*
=========================================
UPDATE INCIDENT STATUS
PUT /api/incidents/:id/status
=========================================
*/
router.put("/:id/status", updateIncidentStatus);

/*
=========================================
DELETE INCIDENT
DELETE /api/incidents/:id
=========================================
*/
router.delete("/:id", deleteIncident);

module.exports = router;