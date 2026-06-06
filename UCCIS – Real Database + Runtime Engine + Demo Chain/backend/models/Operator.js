const db = require("../config/db");

class Operator {

  static async create(data) {
    const [result] = await db.query(
      `
      INSERT INTO operators
      (
        department_id,
        operator_name,
        email
      )
      VALUES (?, ?, ?)
      `,
      [
        data.department_id,
        data.operator_name,
        data.email
      ]
    );

    return result;
  }
}

module.exports = Operator;