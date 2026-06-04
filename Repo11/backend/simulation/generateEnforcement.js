const {
  appendEnforcement
} = require(
  "../services/enforcementService"
);

const {
  createEnforcementContract
} = require(
  "../services/enforcementContractService"
);

const traceId = "TRACE_ENFORCEMENT_001";

const contract =
  createEnforcementContract(
    traceId,
    "MUMBAI_ZONE_7",
    "FLOOD_RESPONSE"
  );

const events = [
  {
    trace_id: traceId,

    state: "SIGNAL_RECEIVED",

    action: "SIGNAL_CAPTURED",

    timestamp: new Date().toISOString(),

    sequence: 1
  },

  {
    trace_id: traceId,

    state: "GOVERNANCE_VISIBLE",

    action: "GOVERNANCE_VALIDATED",

    timestamp: new Date(
      Date.now() + 1000
    ).toISOString(),

    sequence: 2
  },

  {
    trace_id: traceId,

    state: "ENFORCEMENT_REQUEST",

    action: "GENERATE_ENFORCEMENT_REQUEST",

    enforcement_contract: contract,

    timestamp: new Date(
      Date.now() + 2000
    ).toISOString(),

    sequence: 3
  },

  {
    trace_id: traceId,

    state:
      "EXTERNAL_ACKNOWLEDGEMENT",

    action:
      "EXTERNAL_ENFORCEMENT_ACKNOWLEDGED",

    acknowledged_by:
      "DISASTER_RESPONSE_UNIT",

    external_system: true,

    timestamp: new Date(
      Date.now() + 3000
    ).toISOString(),

    sequence: 4
  }
];

events.forEach(event => {
  appendEnforcement(event);
});

console.log(
  "Enforcement Boundary Simulation Generated"
);