const {
  appendFailure,
  appendRecovery
} = require(
  "../services/failureService"
);

const traceId = "TRACE_FAILURE_001";

const failures = [
  "STALE_TELEMETRY",
  "DISCONNECTED_OPERATOR",
  "DROPPED_REPLAY_PACKET",
  "INGESTION_TIMEOUT",
  "GOVERNANCE_REJECTION",
  "DUPLICATE_EXECUTION_REQUEST",
  "REPLAY_CORRUPTION_ATTEMPT"
];

failures.forEach((failure, index) => {

  const failureEvent = {
    trace_id: traceId,

    failure_type: failure,

    timestamp: new Date(
      Date.now() + index * 1000
    ).toISOString(),

    sequence: index + 1,

    lineage_preserved: true,

    replay_continuity_preserved: true,

    audit_trail_preserved: true
  };

  appendFailure(failureEvent);

  const recoveryEvent = {
    trace_id: traceId,

    recovered_from: failure,

    timestamp: new Date(
      Date.now() + index * 1500
    ).toISOString(),

    sequence: index + 1,

    recovery_status: "RECOVERED"
  };

  appendRecovery(recoveryEvent);
});

console.log(
  "Failure + Recovery Simulation Generated"
);