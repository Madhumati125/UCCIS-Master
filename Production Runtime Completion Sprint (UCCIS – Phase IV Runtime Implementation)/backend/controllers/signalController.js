const Signal = require("../models/Signal");

exports.createSignal = async (req, res) => {
  try {
    const signal = await Signal.create({
      signalId: `SIG-${Date.now()}`,
      source: req.body.source,
      severity: req.body.severity,
      payload: req.body.payload
    });

    res.status(201).json({
      success: true,
      data: signal
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getSignals = async (req, res) => {
  try {
    const signals = await Signal.find()
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: signals.length,
      data: signals
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};