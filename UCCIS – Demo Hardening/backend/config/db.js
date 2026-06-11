const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "madhurohi0331$",
  database: process.env.DB_NAME || "uccis",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;