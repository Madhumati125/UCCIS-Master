const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./database/sqlite/uccis.db",
  (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("UCCIS DB Connected");
    }
  }
);

module.exports = db;