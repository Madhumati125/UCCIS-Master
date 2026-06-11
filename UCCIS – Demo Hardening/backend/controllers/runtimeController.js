const db = require("../config/db");

/*
=========================================
GET RUNTIME LOGS
GET /api/runtime/logs
=========================================
*/
exports.getRuntimeLogs = async (req, res) => {
  try {

    const [rows] = await db.promise().query(`
      SELECT *
      FROM runtime_logs
      ORDER BY log_id DESC
      LIMIT 100
    `);

    res.status(200).json(rows);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};

/*
=========================================
GET REPLAY EVENTS
GET /api/runtime/replay
=========================================
*/
exports.getReplayEvents = async (req, res) => {
  try {

    const [rows] = await db.promise().query(`
      SELECT *
      FROM replay_events
      ORDER BY replay_id DESC
    `);

    res.status(200).json(rows);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};

/*
=========================================
GET TRACE LOGS
GET /api/runtime/trace/:traceId
=========================================
*/
exports.getTraceLogs = async (req, res) => {
  try {

    const traceId = req.params.traceId;

    const [rows] = await db.promise().query(
      `
      SELECT *
      FROM runtime_logs
      WHERE trace_id = ?
      ORDER BY log_id ASC
      `,
      [traceId]
    );

    res.status(200).json(rows);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};