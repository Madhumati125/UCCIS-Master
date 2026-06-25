const Evidence =
require("../models/Evidence");

exports.createEvidence =
async (req, res) => {

  try {

    const evidence =
      await Evidence.create({

        evidenceId:
          `EVD-${Date.now()}`,

        replayId:
          req.body.replayId,

        traceId:
          req.body.traceId,

        status:
          "Stored"
      });

    res.status(201).json({
      success: true,
      data: evidence
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

exports.getEvidence =
async (req, res) => {

  try {

    const evidence =
      await Evidence.find()
        .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: evidence.length,
      data: evidence
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};