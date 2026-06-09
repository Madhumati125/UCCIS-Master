const db = require("../config/db");

class RuntimeLog {
  static getAll() {
    return db.promise().query(
      "SELECT * FROM runtime_logs ORDER BY created_at DESC"
    );
  }

  static getById(id) {
    return db.promise().query(
      "SELECT * FROM runtime_logs WHERE log_id = ?",
      [id]
    );
  }

  static create(data) {
    return db.promise().query(
      "INSERT INTO runtime_logs SET ?",
      [data]
    );
  }
}

module.exports = RuntimeLog;