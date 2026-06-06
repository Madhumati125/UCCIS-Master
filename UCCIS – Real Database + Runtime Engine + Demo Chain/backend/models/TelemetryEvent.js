const db = require("../config/db");

class TelemetryEvent {

  static async create(signalId, telemetry) {

    const [result] = await db.query(
      `
      INSERT INTO telemetry_events
      (
        signal_id,
        telemetry_data
      )
      VALUES (?, ?)
      `,
      [
        signalId,
        JSON.stringify(telemetry)
      ]
    );

    return result;
  }
}

module.exports = TelemetryEvent;