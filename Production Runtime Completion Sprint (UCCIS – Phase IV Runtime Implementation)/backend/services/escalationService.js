const Escalation =
require("../models/Escalation");

class EscalationService {

  async create(incident) {

    return await Escalation.create({

      escalationId:
        `ESC-${Date.now()}`,

      incidentId:
        incident.incidentId,

      traceId:
        incident.traceId,

      priority:
        incident.severity,

      assignedTo:
        "Runtime Team",

      status:
        "Open"

    });

  }

  async getAll() {

    return await Escalation.find()
      .sort({ createdAt: -1 });

  }

}

module.exports =
new EscalationService();