const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/operations", (req, res) => {

  res.json({

    activeIncidents: 84,

    escalations: 12,

    districts: 36,

    replayEvents: 142,

    operationalStress: "HIGH",

    telemetry: "STABLE"

  });

});

app.get("/api/replay", (req, res) => {

  res.json({

    replayStatus: "ACTIVE",

    timelineEvents: 42,

    divergenceDetected: false

  });

});

app.get("/api/observability", (req, res) => {

  res.json({

    telemetryHealthy: true,

    staleSignals: 2,

    replaySync: "HEALTHY"

  });

});

app.get("/api/governance", (req, res) => {

  res.json({

    governanceStatus: "STABLE",

    policyEscalations: 14,

    budgetUtilization: "78%"

  });

});

app.listen(5000, () => {

  console.log("Backend running on port 5000");

});