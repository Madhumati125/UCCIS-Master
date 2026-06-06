const ReplaySession =
require("../models/ReplaySession");

exports.generateReplay =
async(approvalId) => {

  const replay = {
    approvalId,
    generatedAt: new Date(),
    replayStatus: "SUCCESS"
  };

  return await ReplaySession.create({
    approval_id: approvalId,
    replay_json: replay
  });
};