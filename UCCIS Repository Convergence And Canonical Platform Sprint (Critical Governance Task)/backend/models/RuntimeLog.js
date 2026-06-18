class RuntimeLog {
  constructor(data) {
    this.id = data.id;
    this.traceId = data.traceId;
    this.layer = data.layer;
    this.status = data.status;
    this.message = data.message;
    this.createdAt = data.createdAt;
  }
}

module.exports = RuntimeLog;