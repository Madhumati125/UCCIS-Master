const db = require("../config/db");
const escalationService = require("./escalationService");

exports.createIncident = async (
  signalId,
  signal
) => {
  try {
    const [result] = await db.promise().query(
      `
      INSERT INTO incidents
      (
        signal_id,
        incident_type,
        status,
        priority
      )
      VALUES (?,?,?,?)
      `,
      [
        signalId,
        signal.signal_type,
        "OPEN",
        signal.severity
      ]
    );

    await escalationService.createEscalation(
      result.insertId,
      signal
    );
  } catch (error) {
    console.log(error);
  }
};