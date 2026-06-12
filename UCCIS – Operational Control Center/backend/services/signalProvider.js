const db = require("../config/db");

const createSignal = async (
  signalType,
  signalStatus = "ACTIVE"
) => {
  try {
    const [result] = await db.promise().query(
      `
      INSERT INTO signals
      (
        signal_type,
        signal_status
      )
      VALUES (?,?)
      `,
      [signalType, signalStatus]
    );

    return {
      success: true,
      signalId: result.insertId
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
  createSignal
};