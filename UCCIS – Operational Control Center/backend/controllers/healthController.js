const db = require("../config/db");

exports.getHealth = async (req, res) => {
  try {
    const connection = await db.promise().getConnection();

    await connection.query("SELECT 1");

    connection.release();

    res.json({
      success: true,
      backend: "ONLINE",
      database: "CONNECTED",
      runtime: "ACTIVE",
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      backend: "ONLINE",
      database: "DISCONNECTED",
      runtime: "INACTIVE",
      error: error.message
    });
  }
};