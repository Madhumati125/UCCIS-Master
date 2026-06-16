const db = require("../config/db");

/*
=====================================================
COMMAND CENTER OVERVIEW
=====================================================
*/

exports.getCommandCenter = async (req, res) => {
  try {
    const [signals] = await db.promise().query(`
      SELECT *
      FROM signals
      ORDER BY created_at DESC
      LIMIT 20
    `);

    const [telemetry] = await db.promise().query(`
      SELECT *
      FROM telemetry
      ORDER BY created_at DESC
      LIMIT 20
    `);

    const [incidents] = await db.promise().query(`
      SELECT *
      FROM incidents
      ORDER BY created_at DESC
      LIMIT 20
    `);

    const [escalations] = await db.promise().query(`
      SELECT *
      FROM escalations
      ORDER BY created_at DESC
      LIMIT 20
    `);

    const [replays] = await db.promise().query(`
      SELECT *
      FROM replay_events
      ORDER BY created_at DESC
      LIMIT 20
    `);

    const [evidence] = await db.promise().query(`
      SELECT *
      FROM runtime_evidence
      ORDER BY created_at DESC
      LIMIT 20
    `);

    res.json({
      success: true,
      summary: {
        signals: signals.length,
        telemetry: telemetry.length,
        incidents: incidents.length,
        escalations: escalations.length,
        replayEvents: replays.length,
        evidence: evidence.length
      },
      signals,
      telemetry,
      incidents,
      escalations,
      replays,
      evidence
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};

/*
=====================================================
EXECUTIVE SUMMARY
=====================================================
*/

exports.getExecutiveSummary = async (req, res) => {

  try {

    const [[signalCount]] = await db.promise().query(`
      SELECT COUNT(*) count
      FROM signals
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
      signalCount: signalCount.count,
      incidentCount: incidentCount.count,
      escalationCount: escalationCount.count,
      replayCount: replayCount.count,
      evidenceCount: evidenceCount.count
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

};