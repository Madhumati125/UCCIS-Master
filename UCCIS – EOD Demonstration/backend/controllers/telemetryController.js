const Telemetry = require("../models/Telemetry");

exports.getTelemetry = async (req, res) => {
  try {

    const [rows] = await Telemetry.getAll();

    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};