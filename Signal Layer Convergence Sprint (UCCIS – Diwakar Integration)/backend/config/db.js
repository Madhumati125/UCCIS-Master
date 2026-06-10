const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "madhurohi0331$",
  database: "uccis"
});

module.exports = db.promise();