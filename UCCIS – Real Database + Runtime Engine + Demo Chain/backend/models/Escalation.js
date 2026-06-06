const db = require("../config/db");

class Escalation {

  static async create(data) {

    const [result] = await db.query(
      `
      INSERT INTO escalations
      (
        incident_id,
        escalation_level,
        assigned_team
      )
      VALUES (?, ?, ?)
      `,
      [
        data.incident_id,
        data.escalation_level,
        data.assigned_team
      ]
    );

    return result;
  }
}

module.exports = Escalation;