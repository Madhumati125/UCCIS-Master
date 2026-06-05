const TelemetryEvent = require("../models/TelemetryEvent");

class TelemetryService {
  static async create(signalId) {
    return await TelemetryEvent.create(
      signalId,
      "RECEIVED"
    );
  }
}

module.exports = TelemetryService;