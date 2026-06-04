const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

/* =========================================================
RUNTIME STATE
========================================================= */

let telemetry = {
  heartbeat: 98,

  entropy: 12,

  incidents: 4,

  operators: 26,

  escalationRisk: "LOW",

  runtimeStatus: "ACTIVE",

  refreshCount: 0,

  lastRefresh: new Date().toISOString()
};

/* =========================================================
ALERT TICKER
========================================================= */

let alertTicker = [
  {
    id: 1,
    message:
      "Operational replay validated"
  },

  {
    id: 2,
    message:
      "District telemetry synchronized"
  },

  {
    id: 3,
    message:
      "Field operator connected"
  },

  {
    id: 4,
    message:
      "Control center heartbeat stable"
  },

  {
    id: 5,
    message:
      "Telemetry integrity verified"
  },

  {
    id: 6,
    message:
      "Runtime polling healthy"
  },

  {
    id: 7,
    message:
      "Live governance stream active"
  }
];

/* =========================================================
REPLAY STORE
========================================================= */

let replayStore = [
  {
    replayId: 1,

    event:
      "Signal propagation validated",

    severity: "LOW",

    timestamp:
      new Date().toISOString()
  },

  {
    replayId: 2,

    event:
      "Escalation replay checkpoint",

    severity: "MEDIUM",

    timestamp:
      new Date().toISOString()
  }
];

/* =========================================================
ACKNOWLEDGEMENT QUEUE
========================================================= */

let acknowledgementQueue = [
  {
    id: 1,

    department:
      "District Intelligence",

    status:
      "WAITING_ACKNOWLEDGEMENT"
  },

  {
    id: 2,

    department:
      "Operational Logistics",

    status:
      "WAITING_ACKNOWLEDGEMENT"
  },

  {
    id: 3,

    department:
      "Emergency Coordination",

    status:
      "WAITING_ACKNOWLEDGEMENT"
  }
];

/* =========================================================
RUNTIME LOGS
========================================================= */

let runtimeLogs = [
  {
    id: 1,

    level: "INFO",

    message:
      "Runtime initialized",

    timestamp:
      new Date().toISOString()
  },

  {
    id: 2,

    level: "INFO",

    message:
      "Replay engine online",

    timestamp:
      new Date().toISOString()
  },

  {
    id: 3,

    level: "INFO",

    message:
      "Telemetry synchronization active",

    timestamp:
      new Date().toISOString()
  }
];

/* =========================================================
HELPERS
========================================================= */

function addRuntimeLog(
  level,
  message
) {
  runtimeLogs.unshift({
    id: Date.now(),

    level,

    message,

    timestamp:
      new Date().toISOString()
  });

  if (runtimeLogs.length > 20) {
    runtimeLogs.pop();
  }
}

function addReplayEvent(
  event,
  severity
) {
  replayStore.unshift({
    replayId:
      Date.now(),

    event,

    severity,

    timestamp:
      new Date().toISOString()
  });

  if (replayStore.length > 20) {
    replayStore.pop();
  }
}

function addTicker(
  message
) {
  alertTicker.unshift({
    id: Date.now(),

    message
  });

  if (alertTicker.length > 10) {
    alertTicker.pop();
  }
}

/* =========================================================
MOCK LIVE STREAMING
========================================================= */

setInterval(() => {
  telemetry.refreshCount += 1;

  telemetry.lastRefresh =
    new Date().toISOString();

  telemetry.heartbeat =
    90 +
    Math.floor(
      Math.random() * 10
    );

  telemetry.entropy =
    5 +
    Math.floor(
      Math.random() * 20
    );

  telemetry.operators =
    20 +
    Math.floor(
      Math.random() * 15
    );

  telemetry.incidents =
    1 +
    Math.floor(
      Math.random() * 10
    );

  const runtimeStates = [
    "ACTIVE",
    "STABLE",
    "MONITORING"
  ];

  telemetry.runtimeStatus =
    runtimeStates[
      Math.floor(
        Math.random() *
          runtimeStates.length
      )
    ];

  const escalationStates = [
    "LOW",
    "MEDIUM",
    "HIGH"
  ];

  telemetry.escalationRisk =
    escalationStates[
      Math.floor(
        Math.random() *
          escalationStates.length
      )
    ];

  addRuntimeLog(
    "INFO",
    "Runtime telemetry refreshed"
  );

  addTicker(
    "Telemetry integrity verified"
  );
}, 4000);

/* =========================================================
RUNTIME STATUS API
========================================================= */

app.get(
  "/api/runtime/status",
  (req, res) => {
    res.json({
      runtime: "ACTIVE",

      serverTimestamp:
        new Date().toISOString(),

      telemetry,

      alertTicker,

      replay:
        replayStore,

      acknowledgementQueue,

      runtimeLogs
    });
  }
);

/* =========================================================
GENERATE SIGNAL
========================================================= */

app.post(
  "/api/runtime/generate-signal",
  (req, res) => {
    telemetry.incidents += 1;

    telemetry.entropy += 2;

    telemetry.escalationRisk =
      "HIGH";

    const signalEvent =
      `Operational signal generated #${Date.now()}`;

    addReplayEvent(
      signalEvent,
      "HIGH"
    );

    addRuntimeLog(
      "WARNING",
      signalEvent
    );

    addTicker(
      "Emergency escalation generated"
    );

    res.json({
      success: true,

      message:
        "Signal generated successfully"
    });
  }
);

/* =========================================================
RESET RUNTIME
========================================================= */

app.post(
  "/api/runtime/reset",
  (req, res) => {
    telemetry = {
      heartbeat: 98,

      entropy: 12,

      incidents: 4,

      operators: 26,

      escalationRisk: "LOW",

      runtimeStatus:
        "ACTIVE",

      refreshCount: 0,

      lastRefresh:
        new Date().toISOString()
    };

    addRuntimeLog(
      "INFO",
      "Runtime reset executed"
    );

    addTicker(
      "System runtime reset completed"
    );

    res.json({
      success: true,

      message:
        "Runtime reset successful"
    });
  }
);

/* =========================================================
ACKNOWLEDGE ALERT
========================================================= */

app.post(
  "/api/runtime/acknowledge/:id",
  (req, res) => {
    const id =
      parseInt(
        req.params.id
      );

    acknowledgementQueue =
      acknowledgementQueue.filter(
        (item) =>
          item.id !== id
      );

    addRuntimeLog(
      "INFO",
      `Acknowledgement completed for queue ${id}`
    );

    addTicker(
      "Field acknowledgement received"
    );

    res.json({
      success: true,

      message:
        "Acknowledgement successful"
    });
  }
);

/* =========================================================
PHASE 1 API
========================================================= */

app.get(
  "/api/phase1",
  (req, res) => {
    res.json({
      phase:
        "Phase 1 - Canonical Consolidation",

      runtimeHealth: 96,

      incidents: 4,

      operators: 18,

      threat: "LOW",

      risk: 12,

      repositoriesMerged: 7,

      pendingMigration: 1,

      apiStatus:
        "CONNECTED",

      runtime:
        "OPERATIONAL",

      modules: [
        "backend",
        "frontend",
        "replay",
        "telemetry",
        "maps"
      ]
    });
  }
);

/* =========================================================
PHASE 2 API
========================================================= */

app.get(
  "/api/phase2",
  (req, res) => {
    res.json({
      phase:
        "Phase 2 - Runtime Demonstration",

      runtimeHealth: 91,

      incidents: 7,

      operators: 24,

      threat:
        "MEDIUM",

      risk: 20,

      operationalChain:
        "ACTIVE",

      replay:
        "VERIFIED",

      telemetry:
        "CONNECTED",

      escalation:
        "OPERATIONAL",

      auditLogs:
        "ACTIVE"
    });
  }
);

/* =========================================================
PHASE 3 API
========================================================= */

app.get(
  "/api/phase3",
  (req, res) => {
    res.json({
      phase:
        "Phase 3 - Feature Expansion",

      runtimeHealth: 88,

      incidents: 9,

      operators: 34,

      threat: "HIGH",

      risk: 34,

      liveTicker:
        "ACTIVE",

      operatorFeed:
        "CONNECTED",

      escalationAging:
        "RUNNING",

      deploymentLayer:
        "ACTIVE",

      replayCertainty:
        "VERIFIED"
    });
  }
);

/* =========================================================
PHASE 4 API
========================================================= */

app.get(
  "/api/phase4",
  (req, res) => {
    res.json({
      phase:
        "Phase 4 - Hardening",

      runtimeHealth: 92,

      incidents: 5,

      operators: 22,

      threat: "LOW",

      risk: 16,

      fallbackLayer:
        "ACTIVE",

      staleTelemetry:
        "HANDLED",

      polling:
        "ACTIVE",

      degradedMode:
        "READY",

      replayValidation:
        "VERIFIED"
    });
  }
);

/* =========================================================
PHASE 5 API
========================================================= */

app.get(
  "/api/phase5",
  (req, res) => {
    res.json({
      phase:
        "Phase 5 - Operational Feel",

      runtimeHealth: 97,

      incidents: 3,

      operators: 38,

      threat: "LOW",

      risk: 8,

      heartbeat:
        "VISIBLE",

      timestamps:
        "ACTIVE",

      liveRuntime:
        "CONNECTED",

      counters:
        "RUNNING",

      runtimeStreaming:
        "MOCK_ACTIVE"
    });
  }
);

/* =========================================================
PHASE 6 API
========================================================= */

app.get(
  "/api/phase6",
  (req, res) => {
    res.json({
      phase:
        "Phase 6 - Dashboard Maturity",

      runtimeHealth: 95,

      incidents: 2,

      operators: 31,

      threat: "LOW",

      risk: 10,

      gridDensity:
        "OPTIMIZED",

      cognitionLayer:
        "ACTIVE",

      echarts:
        "CONNECTED",

      executivePanels:
        "ENABLED",

      scanability:
        "HIGH"
    });
  }
);

/* =========================================================
PHASE 7 API
========================================================= */

app.get(
  "/api/phase7",
  (req, res) => {
    res.json({
      phase:
        "Phase 7 - Testability",

      runtimeHealth: 99,

      incidents: 1,

      operators: 12,

      threat: "LOW",

      risk: 4,

      replayTesting:
        "PASSED",

      telemetryTesting:
        "PASSED",

      pollingTesting:
        "PASSED",

      degradedTesting:
        "PASSED",

      proofMapping:
        "VERIFIED"
    });
  }
);

/* =========================================================
DEFAULT ROUTE
========================================================= */

app.get("/", (req, res) => {
  res.send(
    "UCCIS Backend Runtime Active"
  );
});

/* =========================================================
SERVER
========================================================= */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `UCCIS Backend Running On Port ${PORT}`
  );
});