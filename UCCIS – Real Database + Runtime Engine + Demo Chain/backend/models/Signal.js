const db = require("../config/db");

class Signal {

  static async create(data) {

    const [result] = await db.query(
      `
      INSERT INTO signals
      (
        location_id,
        signal_type,
        severity,
        status
      )
      VALUES (?, ?, ?, ?)
      `,
      [
        data.location_id,
        data.signal_type,
        data.severity,
        "ACTIVE"
      ]
    );

    return result;
  }
}

module.exports = Signal;