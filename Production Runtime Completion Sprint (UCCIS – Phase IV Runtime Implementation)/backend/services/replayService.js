const Replay =
require("../models/Replay");

class ReplayService {

  async create(escalation) {

    const startedAt =
      Date.now();

    const completedAt =
      Date.now();

    return await Replay.create({

      replayId:
        `REP-${Date.now()}`,

      incidentId:
        escalation.incidentId,

      traceId:
        escalation.traceId,

      status:
        "Completed",

      startedAt:
        new Date(startedAt),

      completedAt:
        new Date(completedAt),

      duration:
        completedAt - startedAt

    });

  }

  async getAll() {

    return await Replay.find()
      .sort({ createdAt: -1 });

  }

}

module.exports =
new ReplayService();