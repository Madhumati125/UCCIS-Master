const { createSignal } = require("../services/signalProvider");
const { createTelemetry } = require("../services/telemetryEngine");
const { createIncident } = require("../services/incidentEngine");
const { createEscalation } = require("../services/escalationEngine");

const runMedicalScenario = async () => {
  const signal = await createSignal(
    "Medical Emergency"
  );

  const telemetry = await createTelemetry(
    signal.signalId,
    "Emergency Request"
  );

  const incident = await createIncident(
    "Medical Incident",
    "HIGH"
  );

  const escalation = await createEscalation(
    incident.incidentId,
    "LEVEL_2"
  );

  return {
    success: true,
    signal,
    telemetry,
    incident,
    escalation
  };
};

module.exports = runMedicalScenario;