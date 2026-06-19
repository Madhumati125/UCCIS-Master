class Evidence {
  constructor(
    id,
    traceId,
    source,
    reference,
    description,
    createdAt
  ) {
    this.id = id;
    this.traceId = traceId;
    this.source = source;
    this.reference = reference;
    this.description = description;
    this.createdAt = createdAt;
  }
}

module.exports = Evidence;