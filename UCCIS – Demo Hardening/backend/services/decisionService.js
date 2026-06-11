const db = require("../config/db");
const replayService = require("./replayService");

exports.generateDecision = async (
  incidentId,
  signal
) => {
  try {
    const decisionText =
      `Operational response approved for ${signal.signal_type}`;

    await db.promise().query(
      `
      INSERT INTO decisions
      (
        incident_id,
        decision_text,
        decision_status
      )
      VALUES (?,?,?)
      `,
      [
        incidentId,
        decisionText,
        "APPROVED"
      ]
    );

    await replayService.createReplay(
      incidentId,
      signal
    );
  } catch (error) {
    console.log(error);
  }
};