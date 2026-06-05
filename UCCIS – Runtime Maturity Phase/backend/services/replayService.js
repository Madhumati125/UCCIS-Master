const ReplaySession = require("../models/ReplaySession");

class ReplayService {
  static async create(incidentId) {
    return await ReplaySession.create(
      incidentId,
      "REPLAY_GENERATED_SUCCESSFULLY"
    );
  }
}

module.exports = ReplayService;