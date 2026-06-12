const db = require("../config/db");

exports.getReplayEvents = async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      "SELECT * FROM replay_events ORDER BY id DESC"
    );

    res.json({
      success: true,
      count: rows.length,
      data: rows
    });
  } catch (error) {
    res.json({
      success: false,
      error: "Table 'replay_events' doesn't exist",
      data: []
    });
  }
};

exports.getReplayStats = async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      "SELECT COUNT(*) AS total FROM replay_events"
    );

    res.json({
      success: true,
      totalReplayEvents: rows[0].total
    });
  } catch (error) {
    res.json({
      success: true,
      totalReplayEvents: 0
    });
  }
};