const db = require("../config/db");

const createIncident = async (
  incidentName,
  severity
) => {
  try {
    const [result] = await db.promise().query(
      `
      INSERT INTO incidents
      (
        incident_name,
        severity
      )
      VALUES (?,?)
      `,
      [incidentName, severity]
    );

    return {
      success: true,
      incidentId: result.insertId
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: error.message
    };
  }
};

module.exports = {
  createIncident
};