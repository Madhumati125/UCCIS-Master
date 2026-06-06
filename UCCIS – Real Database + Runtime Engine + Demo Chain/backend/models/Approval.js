const db = require("../config/db");

class Approval {

  static async create(data) {

    const [result] = await db.query(
      `
      INSERT INTO approvals
      (
        decision_id,
        approved_by,
        approval_status
      )
      VALUES (?, ?, ?)
      `,
      [
        data.decision_id,
        data.approved_by,
        data.approval_status
      ]
    );

    return result;
  }
}

module.exports = Approval;