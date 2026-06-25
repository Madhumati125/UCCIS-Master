const Incident =
require("../models/Incident");

class IncidentService {

  async create(signal, telemetry) {

    return await Incident.create({

      incidentId:
        `INC-${Date.now()}`,

      signalId:
        signal.signalId,

      traceId:
        `TRACE-${Date.now()}`,

      severity:
        signal.severity,

      telemetryId:
        telemetry._id,

      status:
        "Open"

    });

  }

  async getAll() {

    return await Incident.find()
      .sort({ createdAt: -1 });

  }

  async countOpen() {

    return await Incident.countDocuments({
      status: "Open"
    });

  }

}

module.exports =
new IncidentService();