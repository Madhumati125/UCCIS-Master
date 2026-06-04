const { v4: uuidv4 } = require("uuid");

const {
  appendLifecycle
} = require(
  "../services/lifecycleService"
);

const states = [
  "SIGNAL_RECEIVED",
  "INTELLIGENCE_GENERATED",
  "ESCALATION_CREATED",
  "GOVERNANCE_VISIBLE",
  "ENFORCEMENT_ROUTED",
  "EXECUTION_ACKNOWLEDGED",
  "RESOLUTION_CONFIRMED",
  "BUCKET_PERSISTED",
  "REPLAY_VALIDATED"
];

const traceId = "TRACE_GOV_001";

states.forEach((state, index) => {
  const event = {
    lifecycle_id: uuidv4(),

    trace_id: traceId,

    state,

    sequence: index + 1,

    timestamp: new Date(
      Date.now() + index * 1000
    ).toISOString(),

    zone_id: "MUMBAI_ZONE_1",

    governance_bucket:
      "FLOOD_RESPONSE_BUCKET",

    rejection_visible: false,

    failure_persisted: false
  };

  appendLifecycle(event);
});

console.log(
  "Governance Lifecycle Generated"
);