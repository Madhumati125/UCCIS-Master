const runtimeData = require("../data/runtimeData");

const getAnalytics = (req, res) => {
  const activeSignals = runtimeData.signals.filter(
    (s) => s.status === "Active"
  ).length;

  const activeIncidents = runtimeData.incidents.filter(
    (i) => i.status === "Open"
  ).length;

  const escalations = runtimeData.escalations.length;

  const replayCount = runtimeData.replays.length;

  const runtimeHealth = "98%";

  res.json({
    activeSignals,
    activeIncidents,
    escalations,
    replayCount,
    runtimeHealth,
    signalTypes: 6,
    incidentTypes: 4,
    trendIndicator: "+12%",
  });
};

module.exports = {
  getAnalytics,
};