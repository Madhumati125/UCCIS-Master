const Signal = require("../models/Signal");
const TelemetryService = require("../services/telemetryService");

exports.createSignal = async (req, res) => {
  try {

    const { signalType, locationId } = req.body;

    const signal = await Signal.create(
      signalType,
      locationId
    );

    await TelemetryService.create(
      signal.insertId
    );

    res.status(201).json({
      success: true,
      message: "Signal Created",
      signalId: signal.insertId
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }
};

exports.getSignals = async (req, res) => {
  try {

    const data = await Signal.getAll();

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};