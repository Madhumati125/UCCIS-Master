class EscalationEngine {
  constructor() {
    this.escalations = [];
  }

  createEscalation(
    incidentId,
    priority
  ) {
    const escalation = {
      escalationId:
        "ESC-" +
        Date.now(),

      incidentId,

      priority,

      status: "OPEN",

      createdAt:
        new Date()
    };

    this.escalations.push(
      escalation
    );

    return escalation;
  }

  getEscalations() {
    return this.escalations;
  }

  resolveEscalation(id) {
    const escalation =
      this.escalations.find(
        (e) =>
          e.escalationId === id
      );

    if (escalation) {
      escalation.status =
        "RESOLVED";
    }

    return escalation;
  }
}

module.exports =
  new EscalationEngine();