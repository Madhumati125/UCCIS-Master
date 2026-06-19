class Replay {
  constructor(
    id,
    traceId,
    replayType,
    status,
    replayTime,
    createdAt
  ) {
    this.id = id;
    this.traceId = traceId;
    this.replayType = replayType;
    this.status = status;
    this.replayTime = replayTime;
    this.createdAt = createdAt;
  }
}

module.exports = Replay;