const db = require("../config/db");
const telemetryService = require("../services/telemetryService");

/*
=================================
CREATE SIGNAL
=================================
*/
exports.createSignal = async (req, res) => {
  try {
    const {
      trace_id,
      signal_type,
      source_system,
      location,
      severity,
      confidence,
      payload
    } = req.body;

    const [result] = await db.promise().query(
      `
      INSERT INTO signals
      (
        trace_id,
        signal_type,
        source_system,
        location,
        severity,
        confidence,
        payload
      )
      VALUES (?,?,?,?,?,?,?)
      `,
      [
        trace_id,
        signal_type,
        source_system,
        location,
        severity,
        confidence,
        JSON.stringify(payload)
      ]
    );

    await telemetryService.processSignal(
      result.insertId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: "Signal Created Successfully",
      signalId: result.insertId
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
=================================
GET ALL SIGNALS
=================================
*/
exports.getSignals = async (req, res) => {
  try {

    const [rows] = await db.promise().query(`
      SELECT *
      FROM signals
      ORDER BY signal_id DESC
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
=================================
GET SIGNAL BY ID
=================================
*/
exports.getSignalById = async (req, res) => {
  try {

    const signalId = req.params.id;

    const [rows] = await db.promise().query(
      `
      SELECT *
      FROM signals
      WHERE signal_id = ?
      `,
      [signalId]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Signal Not Found"
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
=================================
DELETE SIGNAL
=================================
*/
exports.deleteSignal = async (req, res) => {
  try {

    const signalId = req.params.id;

    await db.promise().query(
      `
      DELETE FROM signals
      WHERE signal_id = ?
      `,
      [signalId]
    );

    res.status(200).json({
      success: true,
      message: "Signal Deleted Successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};