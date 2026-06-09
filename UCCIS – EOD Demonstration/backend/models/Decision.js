const db = require("../config/db");

class Decision {
  static getAll() {
    return db.promise().query(
      "SELECT * FROM decisions"
    );
  }

  static getById(id) {
    return db.promise().query(
      "SELECT * FROM decisions WHERE decision_id = ?",
      [id]
    );
  }

  static create(data) {
    return db.promise().query(
      "INSERT INTO decisions SET ?",
      [data]
    );
  }
}

module.exports = Decision;