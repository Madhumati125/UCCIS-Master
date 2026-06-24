const Signal =
  require("../models/Signal");

exports.getSignals = async (
  req,
  res
) => {
  const signals =
    await Signal.find();

  res.json(signals);
};

exports.createSignal =
  async (req, res) => {
    const signal =
      await Signal.create(
        req.body
      );

    res.status(201).json(signal);
  };