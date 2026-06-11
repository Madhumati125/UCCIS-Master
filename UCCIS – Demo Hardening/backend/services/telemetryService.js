const db = require("../config/db");
const incidentService = require("./incidentService");

exports.processSignal = async (signalId, signal) => {
  try {
    const telemetryData = {
      trace_id: signal.trace_id,
      severity: signal.severity,
      confidence: signal.confidence,
      status: "INGESTED",
      source_system: signal.source_system
    };

    await db.promise().query(
      `
      INSERT INTO telemetry_events
      (
        signal_id,
        telemetry_type,
        telemetry_data
      )
      VALUES (?,?,?)
      `,
      [
        signalId,
        signal.signal_type,
        JSON.stringify(telemetryData)
      ]
    );

    await incidentService.createIncident(
      signalId,
      signal
    );
  } catch (error) {
    console.log(error);
  }
};