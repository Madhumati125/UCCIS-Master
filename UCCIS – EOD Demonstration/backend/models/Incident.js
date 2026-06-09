const db = require("../config/db");

class Incident {
  static getAll() {
    return db.promise().query(
      "SELECT * FROM incidents"
    );
  }

  static getById(id) {
    return db.promise().query(
      "SELECT * FROM incidents WHERE incident_id = ?",
      [id]
    );
  }

  static create(data) {
    return db.promise().query(
      "INSERT INTO incidents SET ?",
      [data]
    );
  }
}

module.exports = Incident;