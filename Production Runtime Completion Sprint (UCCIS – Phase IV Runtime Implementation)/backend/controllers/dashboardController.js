const Signal =
require("../models/Signal");

const Incident =
require("../models/Incident");

const Escalation =
require("../models/Escalation");

const Replay =
require("../models/Replay");

const Evidence =
require("../models/Evidence");

exports.getMetrics =
async (req, res) => {

  try {

    const activeSignals =
      await Signal.countDocuments();

    const openIncidents =
      await Incident.countDocuments({
        status: "Open"
      });

    const openEscalations =
      await Escalation.countDocuments({
        status: "Open"
      });

    const replayQueue =
      await Replay.countDocuments({
        status: "Pending"
      });

    const evidenceCount =
      await Evidence.countDocuments();

    const runtimeHealth =
      openIncidents > 20
        ? "Critical"
        : openIncidents > 10
        ? "Warning"
        : "Healthy";

    res.json({

      activeSignals,

      openIncidents,

      openEscalations,

      replayQueue,

      evidenceCount,

      runtimeHealth,

      lastUpdated:
        new Date()

    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};