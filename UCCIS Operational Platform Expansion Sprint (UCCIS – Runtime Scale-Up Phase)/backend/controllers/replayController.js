const runtimeData = require("../data/runtimeData");

const getReplays = (req, res) => {
  res.json(runtimeData.replays);
};

const getReplayByTrace = (req, res) => {
  const replay = runtimeData.replays.find(
    (r) => r.traceId === req.params.traceId
  );

  if (!replay) {
    return res.status(404).json({
      message: "Replay not found",
    });
  }

  res.json(replay);
};

module.exports = {
  getReplays,
  getReplayByTrace,
};