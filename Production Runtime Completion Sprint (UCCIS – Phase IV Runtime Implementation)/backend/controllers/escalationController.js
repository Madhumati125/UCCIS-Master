const Escalation =
require("../models/Escalation");

exports.createEscalation =
async (req, res) => {

  try {

    const escalation =
      await Escalation.create({

        escalationId:
          `ESC-${Date.now()}`,

        incidentId:
          req.body.incidentId,

        traceId:
          req.body.traceId,

        priority:
          req.body.priority,

        assignedTo:
          req.body.assignedTo,

        status:
          "Open"
      });

    res.status(201).json({
      success: true,
      data: escalation
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

exports.getEscalations =
async (req, res) => {

  try {

    const escalations =
      await Escalation.find()
        .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: escalations.length,
      data: escalations
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};