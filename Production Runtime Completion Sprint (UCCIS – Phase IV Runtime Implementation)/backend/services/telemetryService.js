const Telemetry =
require("../models/Telemetry");

class TelemetryService {

  async generate(signal) {

    return await Telemetry.create({

      signalId:
        signal.signalId,

      cpuUsage:
        process.cpuUsage().user,

      memoryUsage:
        process.memoryUsage().heapUsed,

      uptime:
        process.uptime(),

      timestamp:
        new Date()

    });

  }

  async getAll() {

    return await Telemetry.find()
      .sort({ timestamp: -1 });

  }

}

module.exports =
new TelemetryService();