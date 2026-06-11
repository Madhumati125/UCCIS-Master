const db = require("../config/db");
const runtimeLogService = require("./runtimeLogService");

exports.createReplay = async (
  incidentId,
  signal
) => {
  try {
    const replayData = {
      trace_id: signal.trace_id,
      scenario: signal.signal_type,
      replay_status: "COMPLETED",
      timestamp: new Date()
    };

    await db.promise().query(
      `
      INSERT INTO replay_events
      (
        incident_id,
        replay_data
      )
      VALUES (?,?)
      `,
      [
        incidentId,
        JSON.stringify(replayData)
      ]
    );

    await runtimeLogService.writeLogs(signal);
  } catch (error) {
    console.log(error);
  }
};