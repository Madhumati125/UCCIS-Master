class Escalation {
  constructor(
    id,
    traceId,
    incidentId,
    level,
    assignedTo,
    status,
    createdAt,
    updatedAt
  ) {
    this.id = id;
    this.traceId = traceId;
    this.incidentId = incidentId;
    this.level = level;
    this.assignedTo = assignedTo;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Escalation;