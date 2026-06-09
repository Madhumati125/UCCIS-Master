const Incident = require("../models/Incident");

exports.getIncidents = async (req, res) => {
  try {

    const [rows] = await Incident.getAll();

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