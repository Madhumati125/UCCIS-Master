const db = require("../config/db");

exports.getRuntimeLogs = async (req, res) => {
  try {

    const [rows] = await db.promise().query(`
      SELECT *
      FROM runtime_logs
      ORDER BY created_at DESC
    `);

    res.json({
      success: true,
      count: rows.length,
      data: rows
    });

  } catch (error) {

    console.error("Runtime Error:", error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};

exports.getRuntimeStats = async (req, res) => {
  try {

    const [rows] = await db.promise().query(`
      SELECT COUNT(*) AS total
      FROM runtime_logs
    `);

    res.json({
      success: true,
      totalLogs: rows[0].total
    });

  } catch (error) {

    console.error("Runtime Stats Error:", error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};