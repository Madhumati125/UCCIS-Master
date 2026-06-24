class TraceEngine {
  constructor() {
    this.traces = [];
  }

  createTrace() {
    const trace = {
      traceId:
        "TRACE-" +
        Date.now(),

      status: "ACTIVE",

      createdAt: new Date()
    };

    this.traces.push(trace);

    return trace;
  }

  getAllTraces() {
    return this.traces;
  }

  getTrace(traceId) {
    return this.traces.find(
      (t) => t.traceId === traceId
    );
  }

  closeTrace(traceId) {
    const trace =
      this.getTrace(traceId);

    if (trace) {
      trace.status = "CLOSED";
    }

    return trace;
  }
}

module.exports =
  new TraceEngine();