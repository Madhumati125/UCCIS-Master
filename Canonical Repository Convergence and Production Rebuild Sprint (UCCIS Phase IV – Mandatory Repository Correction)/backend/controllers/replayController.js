const Replay =
  require("../models/Replay");

exports.getReplays =
  async (req, res) => {
    const replays =
      await Replay.find();

    res.json(replays);
  };

exports.createReplay =
  async (req, res) => {
    const replay =
      await Replay.create(
        req.body
      );

    res.status(201).json(
      replay
    );
  };