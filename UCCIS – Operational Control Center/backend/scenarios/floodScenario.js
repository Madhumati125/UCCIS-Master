const { createSignal } = require("../services/signalProvider");
const { createTelemetry } = require("../services/telemetryEngine");
const { createIncident } = require("../services/incidentEngine");
const { createEscalation } = require("../services/escalationEngine");
const db = require("../config/db");

const runFloodScenario = async () => {
  try {
    const signal = await createSignal("Flood Alert");

    const telemetry = await createTelemetry(
      signal.signalId,
      "Water Level Rising"
    );

    const incident = await createIncident(
      "Flood Emergency",
      "HIGH"
    );

    const escalation = await createEscalation(
      incident.incidentId,
      "LEVEL_1"
    );

    await db.promise().query(
      `
      INSERT INTO runtime_logs
      (
        log_message,
        log_level
      )
      VALUES (?,?)
      `,
      [
        "Flood Scenario Executed",
        "INFO"
      ]
    );

    return {
      success: true,
      signal,
      telemetry,
      incident,
      escalation
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

module.exports = runFloodScenario;