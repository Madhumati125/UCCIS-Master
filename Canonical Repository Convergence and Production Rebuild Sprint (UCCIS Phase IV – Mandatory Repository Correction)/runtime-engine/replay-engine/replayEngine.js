class ReplayEngine {
  constructor() {
    this.executions = [];
  }

  execute(traceId) {
    const replay = {
      replayId:
        "REP-" +
        Date.now(),

      traceId,

      status: "SUCCESS",

      duration:
        Math.floor(
          Math.random() * 500
        ) + " ms",

      timestamp: new Date()
    };

    this.executions.push(replay);

    return replay;
  }

  getExecutions() {
    return this.executions;
  }
}

module.exports =
  new ReplayEngine();