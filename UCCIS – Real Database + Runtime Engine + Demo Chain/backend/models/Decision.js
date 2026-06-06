const db = require("../config/db");

class Decision {

  static async create(data) {

    const [result] = await db.query(
      `
      INSERT INTO decisions
      (
        escalation_id,
        decision_text
      )
      VALUES (?, ?)
      `,
      [
        data.escalation_id,
        data.decision_text
      ]
    );

    return result;
  }
}

module.exports = Decision;