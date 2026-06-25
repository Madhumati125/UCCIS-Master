const Replay =
require("../models/Replay");

exports.createReplay =
async (req, res) => {

  try {

    const replay =
      await Replay.create({

        replayId:
          `REP-${Date.now()}`,

        incidentId:
          req.body.incidentId,

        traceId:
          req.body.traceId,

        status:
          "Completed",

        startedAt:
          new Date(),

        completedAt:
          new Date(),

        duration:
          0
      });

    res.status(201).json({
      success: true,
      data: replay
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

exports.getReplays =
async (req, res) => {

  try {

    const replays =
      await Replay.find()
        .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: replays.length,
      data: replays
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};