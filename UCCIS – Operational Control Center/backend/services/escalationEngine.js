const db = require("../config/db");

const createEscalation = async (
  incidentId,
  escalationLevel
) => {
  try {
    const [result] = await db.promise().query(
      `
      INSERT INTO escalations
      (
        incident_id,
        escalation_level
      )
      VALUES (?,?)
      `,
      [incidentId, escalationLevel]
    );

    return {
      success: true,
      escalationId: result.insertId
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
  createEscalation
};