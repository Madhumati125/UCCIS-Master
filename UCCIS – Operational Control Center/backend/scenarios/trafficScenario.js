const { createSignal } = require("../services/signalProvider");
const { createTelemetry } = require("../services/telemetryEngine");
const { createIncident } = require("../services/incidentEngine");
const { createEscalation } = require("../services/escalationEngine");

const runTrafficScenario = async () => {
  const signal = await createSignal(
    "Traffic Alert"
  );

  const telemetry = await createTelemetry(
    signal.signalId,
    "Traffic Congestion"
  );

  const incident = await createIncident(
    "Traffic Incident",
    "MEDIUM"
  );

  const escalation = await createEscalation(
    incident.incidentId,
    "LEVEL_1"
  );

  return {
    success: true,
    signal,
    telemetry,
    incident,
    escalation
  };
};

module.exports = runTrafficScenario;