/* =========================================================
UCCIS GOVERNANCE COMMAND CENTER
PHASE 1 → PHASE 8
CANONICAL BACKEND
========================================================= */

const express = require("express");

const cors = require("cors");

const fs = require("fs");

const path = require("path");

/* =========================================================
APP
========================================================= */

const app = express();

/* =========================================================
MIDDLEWARE
========================================================= */

app.use(cors());

app.use(express.json());

/* =========================================================
HELPER
========================================================= */

const saveJsonFile = (
  filename,
  data
) => {

  const dataDir =
    path.join(__dirname, "data");

  if (!fs.existsSync(dataDir)) {

    fs.mkdirSync(dataDir);

  }

  fs.writeFileSync(

    path.join(dataDir, filename),

    JSON.stringify(
      data,
      null,
      2
    )

  );

};

/* =========================================================
PHASE 1 — ALERTS
========================================================= */

app.get(
  "/api/alerts",
  (req, res) => {

    const alerts = [

      {
        title:
          "Flood Escalation Active",
        severity:
          "Critical",
        timestamp:
          "09:22"
      },

      {
        title:
          "Traffic Density Spike",
        severity:
          "High",
        timestamp:
          "09:41"
      },

      {
        title:
          "Medical Dispatch Delay",
        severity:
          "Medium",
        timestamp:
          "10:02"
      }

    ];

    saveJsonFile(
      "alerts.json",
      alerts
    );

    res.json(alerts);

  }
);

/* =========================================================
PHASE 1 — TELEMETRY
========================================================= */

app.get(
  "/api/telemetry",
  (req, res) => {

    const telemetry = [

      {
        service:
          "Traffic Grid",

        district:
          "Mumbai",

        health:
          "Operational",

        latency:
          "42ms"
      },

      {
        service:
          "Police Mesh",

        district:
          "Thane",

        health:
          "Stable",

        latency:
          "51ms"
      },

      {
        service:
          "Utility Coordination",

        district:
          "MMR",

        health:
          "Elevated",

        latency:
          "63ms"
      }

    ];

    saveJsonFile(
      "telemetry.json",
      telemetry
    );

    res.json(telemetry);

  }
);

/* =========================================================
PHASE 2 — ESCALATION
========================================================= */

app.get(
  "/api/escalation",
  (req, res) => {

    const escalation = [

      {
        district:
          "Mumbai",

        risk:
          84,

        trend:
          "Critical Growth"
      },

      {
        district:
          "Thane",

        risk:
          62,

        trend:
          "Stable Trend"
      },

      {
        district:
          "MMR",

        risk:
          71,

        trend:
          "Elevated"
      }

    ];

    saveJsonFile(
      "escalation.json",
      escalation
    );

    res.json(escalation);

  }
);

/* =========================================================
PHASE 2 — REPLAY
========================================================= */

app.get(
  "/api/replay",
  (req, res) => {

    const replay = [

      {
        incident:
          "Flood Reconstruction",

        confidence:
          94,

        entropy:
          12
      },

      {
        incident:
          "Traffic Replay",

        confidence:
          88,

        entropy:
          17
      },

      {
        incident:
          "Utility Failure Replay",

        confidence:
          91,

        entropy:
          14
      }

    ];

    saveJsonFile(
      "replay.json",
      replay
    );

    res.json(replay);

  }
);

/* =========================================================
PHASE 2 — FIELD OPS
========================================================= */

app.get(
  "/api/field",
  (req, res) => {

    const field = [

      {
        team:
          "Alpha Team",

        district:
          "Mumbai",

        status:
          "Deploying"
      },

      {
        team:
          "Bravo Team",

        district:
          "Thane",

        status:
          "Active"
      },

      {
        team:
          "Medical Unit",

        district:
          "MMR",

        status:
          "Delayed"
      }

    ];

    saveJsonFile(
      "field.json",
      field
    );

    res.json(field);

  }
);

/* =========================================================
PHASE 2 — GOVERNANCE
========================================================= */

app.get(
  "/api/governance",
  (req, res) => {

    const governance = [

      {
        time:
          "09:12",

        action:
          "Flood escalation routed"
      },

      {
        time:
          "09:28",

        action:
          "District review initiated"
      },

      {
        time:
          "09:42",

        action:
          "Replay verified"
      }

    ];

    saveJsonFile(
      "governance.json",
      governance
    );

    res.json(governance);

  }
);

/* =========================================================
PHASE 2 — HEALTH
========================================================= */

app.get(
  "/api/health",
  (req, res) => {

    const health = {

      operationalHealth:
        91,

      systems: [

        {
          name:
            "Traffic Grid",

          status:
            "Stable"
        },

        {
          name:
            "Replay Engine",

          status:
            "Verified"
        },

        {
          name:
            "Governance Layer",

          status:
            "Operational"
        }

      ]

    };

    saveJsonFile(
      "health.json",
      health
    );

    res.json(health);

  }
);

/* =========================================================
PHASE 2 — HEATMAP
========================================================= */

app.get(
  "/api/heatmap",
  (req, res) => {

    const heatmap = [

      {
        zone:
          "Mumbai",

        load:
          91
      },

      {
        zone:
          "Thane",

        load:
          74
      },

      {
        zone:
          "MMR",

        load:
          82
      }

    ];

    saveJsonFile(
      "heatmap.json",
      heatmap
    );

    res.json(heatmap);

  }
);

/* =========================================================
PHASE 6 — SIGNAL CHAIN
========================================================= */

app.get(
  "/api/signals",
  (req, res) => {

    const signals = [

      {
        signal:
          "Flood Detection",

        telemetry:
          "Water Level Rising",

        escalation:
          "District Escalated",

        replay:
          "Replay Generated",

        status:
          "Critical"
      }

    ];

    saveJsonFile(
      "signals.json",
      signals
    );

    res.json(signals);

  }
);

/* =========================================================
PHASE 6 — LIVE RUNTIME
========================================================= */

app.get(
  "/api/runtime",
  (req, res) => {

    const runtime = {

      heartbeat:
        "ACTIVE",

      operators:
        247,

      updated:
        new Date()
          .toLocaleString(),

      uptime:
        process.uptime()
    };

    saveJsonFile(
      "runtime.json",
      runtime
    );

    res.json(runtime);

  }
);

/* =========================================================
PHASE 3 — ERROR HANDLING
========================================================= */

app.use(
  (err, req, res, next) => {

    console.error(err);

    res.status(500).json({

      error:
        "Operational Runtime Failure"

    });

  }
);

/* =========================================================
SERVER
========================================================= */

const PORT = 5000;

app.listen(PORT, () => {

  console.log(

    `UCCIS Backend Running On Port ${PORT}`

  );

});