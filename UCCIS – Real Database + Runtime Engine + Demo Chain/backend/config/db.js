const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "madhurohi0331$",
  database: "uccis",
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = connection.promise();