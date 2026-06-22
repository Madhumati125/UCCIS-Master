const RuntimeEngine =
  require("./RuntimeEngine");

class RuntimeScheduler {
  start() {
    console.log(
      "Runtime Scheduler Started"
    );

    setInterval(() => {
      const runtimes =
        RuntimeEngine.getAllRuntimeEvents();

      runtimes.forEach(runtime => {
        if (
          runtime.state ===
          "SIGNAL_RECEIVED"
        ) {
          RuntimeEngine.transition(
            runtime.traceId,
            "TELEMETRY"
          );
        }
      });
    }, 5000);

    setInterval(() => {
      const runtimes =
        RuntimeEngine.getAllRuntimeEvents();

      runtimes.forEach(runtime => {
        if (
          runtime.state ===
          "TELEMETRY_PROCESSED"
        ) {
          RuntimeEngine.transition(
            runtime.traceId,
            "INCIDENT"
          );
        }
      });
    }, 8000);

    setInterval(() => {
      const runtimes =
        RuntimeEngine.getAllRuntimeEvents();

      runtimes.forEach(runtime => {
        if (
          runtime.state ===
          "INCIDENT_CREATED"
        ) {
          RuntimeEngine.transition(
            runtime.traceId,
            "ESCALATION"
          );
        }
      });
    }, 12000);
  }
}

module.exports =
  new RuntimeScheduler();