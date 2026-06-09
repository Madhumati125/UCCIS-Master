const db = require("../config/db");

class ReplaySession {
  static getAll() {
    return db.promise().query(
      "SELECT * FROM replay_sessions"
    );
  }

  static getById(id) {
    return db.promise().query(
      "SELECT * FROM replay_sessions WHERE replay_id = ?",
      [id]
    );
  }

  static create(data) {
    return db.promise().query(
      "INSERT INTO replay_sessions SET ?",
      [data]
    );
  }
}

module.exports = ReplaySession;