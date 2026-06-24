class TraceManager {

  constructor() {
    this.traces = [];
  }

  createTrace() {

    const trace = {

      traceId:
        "TRACE-" +
        Date.now(),

      status: "ACTIVE",

      timestamp:
        new Date()
    };

    this.traces.push(trace);

    return trace;
  }

  getAllTraces() {
    return this.traces;
  }
}

module.exports =
  new TraceManager();