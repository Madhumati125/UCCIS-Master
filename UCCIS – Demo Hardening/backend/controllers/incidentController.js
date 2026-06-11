const db = require("../config/db");

/*
=========================================
GET ALL INCIDENTS
=========================================
*/
exports.getIncidents = async (req, res) => {
  try {

    const [rows] = await db.promise().query(`
      SELECT *
      FROM incidents
      ORDER BY incident_id DESC
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
GET INCIDENT BY ID
=========================================
*/
exports.getIncidentById = async (req, res) => {
  try {

    const incidentId = req.params.id;

    const [rows] = await db.promise().query(
      `
      SELECT *
      FROM incidents
      WHERE incident_id = ?
      `,
      [incidentId]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Incident Not Found"
      });
    }

    res.status(200).json(rows[0]);

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
UPDATE INCIDENT STATUS
=========================================
*/
exports.updateIncidentStatus = async (req, res) => {
  try {

    const incidentId = req.params.id;
    const { status } = req.body;

    await db.promise().query(
      `
      UPDATE incidents
      SET status = ?
      WHERE incident_id = ?
      `,
      [status, incidentId]
    );

    res.status(200).json({
      success: true,
      message: "Incident Updated Successfully"
    });

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
DELETE INCIDENT
=========================================
*/
exports.deleteIncident = async (req, res) => {
  try {

    const incidentId = req.params.id;

    await db.promise().query(
      `
      DELETE FROM incidents
      WHERE incident_id = ?
      `,
      [incidentId]
    );

    res.status(200).json({
      success: true,
      message: "Incident Deleted Successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};