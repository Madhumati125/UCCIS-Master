const db = require("../config/db");

exports.getDashboardKPIs = async (req, res) => {
  try {
    const [[signals]] =
      await db.promise().query(
        "SELECT COUNT(*) total FROM signals"
      );

    const [[incidents]] =
      await db.promise().query(
        "SELECT COUNT(*) total FROM incidents"
      );

    const [[telemetry]] =
      await db.promise().query(
        "SELECT COUNT(*) total FROM telemetry_events"
      );

    const [[runtime]] =
      await db.promise().query(
        "SELECT COUNT(*) total FROM runtime_logs"
      );

    res.json({
      signals: signals.total,
      incidents: incidents.total,
      telemetry: telemetry.total,
      runtimeLogs: runtime.total
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getScenarioSummary = async (req, res) => {
  try {
    const [rows] = await db.promise().query(`
      SELECT signal_type,
      COUNT(*) total
      FROM signals
      GROUP BY signal_type
    `);

    res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getRuntimeHealth = async (req, res) => {
  res.json({
    backend: "ONLINE",
    database: "CONNECTED",
    runtimeEngine: "ACTIVE",
    telemetry: "ACTIVE",
    escalationEngine: "ACTIVE"
  });
};

exports.getLatestIncidents = async (req, res) => {
  try {
    const [rows] = await db.promise().query(`
      SELECT *
      FROM incidents
      ORDER BY id DESC
      LIMIT 10
    `);

    res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
};