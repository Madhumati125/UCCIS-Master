const db = require("../config/db");

exports.getIncidents = async (req, res) => {
  try {

    const [incidents] = await db.promise().query(`
      SELECT *
      FROM incidents
    `);

    res.json({
      success: true,
      count: incidents.length,
      data: incidents
    });

  } catch (error) {

    console.error("Incident Error:", error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};

exports.getIncidentStats = async (req, res) => {
  try {

    const [rows] = await db.promise().query(`
      SELECT COUNT(*) AS total
      FROM incidents
    `);

    res.json({
      success: true,
      totalIncidents: rows[0].total
    });

  } catch (error) {

    console.error("Incident Stats Error:", error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};