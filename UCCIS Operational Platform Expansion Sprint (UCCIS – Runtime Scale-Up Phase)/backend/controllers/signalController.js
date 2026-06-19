const runtimeData = require("../data/runtimeData");

const getSignals = (req, res) => {
  res.json(runtimeData.signals);
};

const getSignalById = (req, res) => {
  const signal = runtimeData.signals.find(
    (s) => s.id === req.params.id
  );

  if (!signal) {
    return res.status(404).json({
      message: "Signal not found",
    });
  }

  res.json(signal);
};

module.exports = {
  getSignals,
  getSignalById,
};