const Signal = require("../models/Signal");

class SignalService {

  async create(payload) {

    return await Signal.create({

      signalId: `SIG-${Date.now()}`,

      source: payload.source,

      severity: payload.severity,

      payload: payload.payload

    });

  }

  async getAll() {

    return await Signal.find()
      .sort({ createdAt: -1 });

  }

  async getById(id) {

    return await Signal.findById(id);

  }

  async count() {

    return await Signal.countDocuments();

  }

}

module.exports = new SignalService();