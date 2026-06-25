const Evidence =
require("../models/Evidence");

class EvidenceService {

  async create(replay) {

    return await Evidence.create({

      evidenceId:
        `EVD-${Date.now()}`,

      traceId:
        replay.traceId,

      replayId:
        replay.replayId,

      status:
        "Stored",

      location:
        "/evidence/runtime"

    });

  }

  async getAll() {

    return await Evidence.find()
      .sort({ createdAt: -1 });

  }

  async count() {

    return await Evidence.countDocuments();

  }

}

module.exports =
new EvidenceService();