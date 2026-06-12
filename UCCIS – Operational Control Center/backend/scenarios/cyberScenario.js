const { createSignal } = require("../services/signalProvider");
const { createTelemetry } = require("../services/telemetryEngine");
const { createIncident } = require("../services/incidentEngine");
const { createEscalation } = require("../services/escalationEngine");

const runCyberScenario = async () => {
  const signal = await createSignal(
    "Cyber Threat"
  );

  const telemetry = await createTelemetry(
    signal.signalId,
    "Suspicious Login"
  );

  const incident = await createIncident(
    "Cyber Incident",
    "CRITICAL"
  );

  const escalation = await createEscalation(
    incident.incidentId,
    "LEVEL_3"
  );

  return {
    success: true,
    signal,
    telemetry,
    incident,
    escalation
  };
};

module.exports = runCyberScenario;