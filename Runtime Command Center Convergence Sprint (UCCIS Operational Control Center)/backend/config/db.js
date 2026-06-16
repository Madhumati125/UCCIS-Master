require("dotenv").config();

const mysql = require("mysql2");

/*
=====================================================
MYSQL CONNECTION POOL
=====================================================
*/

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "uccis_run",

  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,

  enableKeepAlive: true,
  keepAliveInitialDelay: 10000
});

/*
=====================================================
CONNECTION TEST
=====================================================
*/

db.getConnection((err, connection) => {

  if (err) {

    console.error("");
    console.error(
      "❌ MySQL Connection Failed"
    );

    console.error(err.message);
    console.error("");

    return;
  }

  console.log("");
  console.log(
    "✅ MySQL Connected Successfully"
  );

  console.log(
    `📦 Database : ${
      process.env.DB_NAME
    }`
  );

  console.log("");

  connection.release();

});

/*
=====================================================
DATABASE HEALTH CHECK
=====================================================
*/

const checkDatabaseHealth =
  async () => {

    try {

      const [rows] =
        await db.promise().query(`
          SELECT
          DATABASE() AS database_name,
          NOW() AS server_time
        `);

      return {
        success: true,
        status: "CONNECTED",
        database:
          rows[0].database_name,
        serverTime:
          rows[0].server_time
      };

    } catch (error) {

      return {
        success: false,
        status: "DISCONNECTED",
        error: error.message
      };

    }

  };

/*
=====================================================
DATABASE STATS
=====================================================
*/

const getDatabaseStats =
  async () => {

    try {

      const [[signals]] =
        await db.promise().query(`
          SELECT COUNT(*) count
          FROM signals
        `);

      const [[telemetry]] =
        await db.promise().query(`
          SELECT COUNT(*) count
          FROM telemetry
        `);

      const [[incidents]] =
        await db.promise().query(`
          SELECT COUNT(*) count
          FROM incidents
        `);

      const [[escalations]] =
        await db.promise().query(`
          SELECT COUNT(*) count
          FROM escalations
        `);

      const [[replays]] =
        await db.promise().query(`
          SELECT COUNT(*) count
          FROM replay_events
        `);

      const [[evidence]] =
        await db.promise().query(`
          SELECT COUNT(*) count
          FROM runtime_evidence
        `);

      return {
        success: true,

        signals:
          signals.count,

        telemetry:
          telemetry.count,

        incidents:
          incidents.count,

        escalations:
          escalations.count,

        replays:
          replays.count,

        evidence:
          evidence.count
      };

    } catch (error) {

      return {
        success: false,
        error: error.message
      };

    }

  };

/*
=====================================================
COMMAND CENTER METRICS
=====================================================
*/

const getCommandCenterMetrics =
  async () => {

    try {

      const [[signalCount]] =
        await db.promise().query(`
          SELECT COUNT(*) count
          FROM signals
        `);

      const [[incidentCount]] =
        await db.promise().query(`
          SELECT COUNT(*) count
          FROM incidents
        `);

      const [[escalationCount]] =
        await db.promise().query(`
          SELECT COUNT(*) count
          FROM escalations
        `);

      const [[replayCount]] =
        await db.promise().query(`
          SELECT COUNT(*) count
          FROM replay_events
        `);

      const [[evidenceCount]] =
        await db.promise().query(`
          SELECT COUNT(*) count
          FROM runtime_evidence
        `);

      return {

        success: true,

        signalCount:
          signalCount.count,

        incidentCount:
          incidentCount.count,

        escalationCount:
          escalationCount.count,

        replayCount:
          replayCount.count,

        evidenceCount:
          evidenceCount.count
      };

    } catch (error) {

      return {
        success: false,
        error: error.message
      };

    }

  };

/*
=====================================================
TRACE COUNT
=====================================================
*/

const getTraceCount =
  async () => {

    try {

      const [[rows]] =
        await db.promise().query(`
          SELECT COUNT(DISTINCT trace_id)
          AS totalTraces
          FROM signals
        `);

      return rows.totalTraces;

    } catch (error) {

      return 0;

    }

  };

/*
=====================================================
LAST EXECUTION
=====================================================
*/

const getLastExecution =
  async () => {

    try {

      const [rows] =
        await db.promise().query(`
          SELECT created_at
          FROM signals
          ORDER BY created_at DESC
          LIMIT 1
        `);

      if (!rows.length) {
        return null;
      }

      return rows[0].created_at;

    } catch (error) {

      return null;

    }

  };

/*
=====================================================
GRACEFUL SHUTDOWN
=====================================================
*/

process.on(
  "SIGINT",
  async () => {

    try {

      console.log("");
      console.log(
        "🔴 Closing MySQL Pool..."
      );

      await db.promise().end();

      console.log(
        "✅ Pool Closed"
      );

      process.exit(0);

    } catch (error) {

      console.error(
        error.message
      );

      process.exit(1);

    }

  }
);

/*
=====================================================
EXPORTS
=====================================================
*/

module.exports = db;

module.exports.checkDatabaseHealth =
  checkDatabaseHealth;

module.exports.getDatabaseStats =
  getDatabaseStats;

module.exports.getCommandCenterMetrics =
  getCommandCenterMetrics;

module.exports.getTraceCount =
  getTraceCount;

module.exports.getLastExecution =
  getLastExecution;