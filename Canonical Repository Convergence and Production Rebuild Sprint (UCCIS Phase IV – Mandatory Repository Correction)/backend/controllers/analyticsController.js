const Signal =
  require("../models/Signal");

const Incident =
  require("../models/Incident");

const Escalation =
  require("../models/Escalation");

const Replay =
  require("../models/Replay");

exports.getAnalytics =
  async (req, res) => {

    const totalSignals =
      await Signal.countDocuments();

    const totalIncidents =
      await Incident.countDocuments();

    const totalEscalations =
      await Escalation.countDocuments();

    const totalReplays =
      await Replay.countDocuments();

    res.json({
      totalSignals,
      totalIncidents,
      totalEscalations,
      totalReplays,
      runtimeHealth: "98%",
      status: "Healthy"
    });
  };