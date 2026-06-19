class Incident {
  constructor(
    id,
    traceId,
    signalId,
    type,
    severity,
    status,
    createdAt,
    updatedAt
  ) {
    this.id = id;
    this.traceId = traceId;
    this.signalId = signalId;
    this.type = type;
    this.severity = severity;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Incident;