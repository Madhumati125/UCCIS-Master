const db = require("../config/db");

exports.writeLogs = async (
  signal
) => {
  try {
    const stages = [
      "Signal Generated",
      "Telemetry Created",
      "Incident Created",
      "Escalation Triggered",
      "Decision Approved",
      "Replay Completed",
      "Dashboard Updated"
    ];

    for (const stage of stages) {
      await db.promise().query(
        `
        INSERT INTO runtime_logs
        (
          trace_id,
          stage,
          message
        )
        VALUES (?,?,?)
        `,
        [
          signal.trace_id,
          stage,
          `${stage} Successfully`
        ]
      );
    }
  } catch (error) {
    console.log(error);
  }
};