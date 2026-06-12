const db = require("../config/db");

const createTelemetry = async (
  signalId,
  telemetryType
) => {
  try {
    const [result] = await db.promise().query(
      `
      INSERT INTO telemetry_events
      (
        signal_id,
        telemetry_type
      )
      VALUES (?,?)
      `,
      [signalId, telemetryType]
    );

    return {
      success: true,
      telemetryId: result.insertId
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: error.message
    };
  }
};

module.exports = {
  createTelemetry
};