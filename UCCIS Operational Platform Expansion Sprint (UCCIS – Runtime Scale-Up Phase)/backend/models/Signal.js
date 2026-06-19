class Signal {
  constructor(
    id,
    traceId,
    domain,
    source,
    status,
    severity,
    createdAt,
    updatedAt
  ) {
    this.id = id;
    this.traceId = traceId;
    this.domain = domain;
    this.source = source;
    this.status = status;
    this.severity = severity;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Signal;