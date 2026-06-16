const db = require("../config/db");

exports.getRuntimeHealth = async (req, res) => {

  try {

    const [[signalCount]] = await db.promise().query(`
      SELECT COUNT(*) count
      FROM signals
    `);

    const [[telemetryCount]] = await db.promise().query(`
      SELECT COUNT(*) count
      FROM telemetry
    `);

    const [[incidentCount]] = await db.promise().query(`
      SELECT COUNT(*) count
      FROM incidents
    `);

    const [[escalationCount]] = await db.promise().query(`
      SELECT COUNT(*) count
      FROM escalations
    `);

    const [[replayCount]] = await db.promise().query(`
      SELECT COUNT(*) count
      FROM replay_events
    `);

    const [[evidenceCount]] = await db.promise().query(`
      SELECT COUNT(*) count
      FROM runtime_evidence
    `);

    res.json({
      success: true,
      backendStatus: "UP",
      databaseStatus: "CONNECTED",
      signalCount: signalCount.count,
      telemetryCount: telemetryCount.count,
      incidentCount: incidentCount.count,
      escalationCount: escalationCount.count,
      replayCount: replayCount.count,
      evidenceCount: evidenceCount.count,
      lastRuntimeExecution: new Date()
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      backendStatus: "DOWN",
      databaseStatus: "DISCONNECTED",
      error: error.message
    });

  }

};