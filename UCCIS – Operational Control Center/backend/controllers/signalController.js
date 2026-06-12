const db = require("../config/db");

exports.getSignals = async (req, res) => {
  try {

    const [signals] = await db.promise().query(`
      SELECT *
      FROM signals
      ORDER BY created_at DESC
    `);

    res.json({
      success: true,
      count: signals.length,
      data: signals
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};

exports.getSignalStats = async (req, res) => {
  try {

    const [rows] = await db.promise().query(`
      SELECT COUNT(*) AS total
      FROM signals
    `);

    res.json({
      success: true,
      totalSignals: rows[0].total
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};