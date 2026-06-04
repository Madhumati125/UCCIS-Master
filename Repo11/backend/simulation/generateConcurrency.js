const { v4: uuidv4 } = require("uuid");

const {
  appendConcurrency
} = require(
  "../services/concurrencyService"
);

const operators = [
  "OPERATOR_1",
  "OPERATOR_2",
  "OPERATOR_3"
];

const states = [
  "ESCALATION_CREATED",
  "GOVERNANCE_VISIBLE",
  "ENFORCEMENT_ROUTED",
  "EXECUTION_ACKNOWLEDGED"
];

for (let i = 0; i < 20; i++) {

  const operator =
    operators[
      Math.floor(
        Math.random() * operators.length
      )
    ];

  const state =
    states[
      Math.floor(
        Math.random() * states.length
      )
    ];

  const event = {
    concurrency_id: uuidv4(),

    trace_id: "TRACE_CONCURRENT_001",

    operator_id: operator,

    state,

    timestamp: new Date(
      Date.now() + i * 500
    ).toISOString(),

    sequence: i + 1,

    last_heartbeat:
      new Date().toISOString(),

    stale_session: false,

    conflicting_update: false
  };

  appendConcurrency(event);
}

console.log(
  "Concurrent Operator Events Generated"
);