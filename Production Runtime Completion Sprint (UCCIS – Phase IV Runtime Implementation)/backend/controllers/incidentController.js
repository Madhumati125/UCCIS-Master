const Incident = require("../models/Incident");

exports.createIncident = async (req, res) => {
  try {

    const incident = await Incident.create({
      incidentId: `INC-${Date.now()}`,
      signalId: req.body.signalId,
      traceId: req.body.traceId,
      severity: req.body.severity,
      status: "Open"
    });

    res.status(201).json({
      success: true,
      data: incident
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

exports.getIncidents = async (req, res) => {
  try {

    const incidents = await Incident.find()
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: incidents.length,
      data: incidents
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};