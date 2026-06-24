class IncidentEngine {
  constructor() {
    this.incidents = [];
  }

  createIncident(data) {
    const incident = {
      incidentId:
        "INC-" +
        Date.now(),

      traceId: data.traceId,

      title: data.title,

      severity:
        data.severity,

      status: "OPEN",

      createdAt:
        new Date()
    };

    this.incidents.push(
      incident
    );

    return incident;
  }

  getIncidents() {
    return this.incidents;
  }

  closeIncident(id) {
    const incident =
      this.incidents.find(
        (i) =>
          i.incidentId === id
      );

    if (incident) {
      incident.status =
        "CLOSED";
    }

    return incident;
  }
}

module.exports =
  new IncidentEngine();