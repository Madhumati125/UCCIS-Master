const mysql = require("mysql2");
const env = require("./env");

const db = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.getConnection((err, connection) => {
  if (err) {
    console.log("Database Connection Failed");
    console.log(err.message);
  } else {
    console.log("Database Connected");
    connection.release();
  }
});

module.exports = db;