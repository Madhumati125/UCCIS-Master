const express = require("express");
const router = express.Router();

const Signal = require("../models/Signal");
const Incident = require("../models/Incident");
const Escalation = require("../models/Escalation");
const Replay = require("../models/Replay");
const Evidence = require("../models/Evidence");

router.get("/metrics", async (req, res) => {

  try {

    const activeSignals =
      await Signal.countDocuments();

    const openIncidents =
      await Incident.countDocuments();

    const openEscalations =
      await Escalation.countDocuments();

    const replayQueue =
      await Replay.countDocuments();

    const evidenceCount =
      await Evidence.countDocuments();

    res.status(200).json({

      activeSignals,

      openIncidents,

      openEscalations,

      replayQueue,

      evidenceCount,

      runtimeHealth:
        "Operational",

      timestamp:
        new Date()

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,

      message:
        error.message

    });

  }

});

module.exports = router;