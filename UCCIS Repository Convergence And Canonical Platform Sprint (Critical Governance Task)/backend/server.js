const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/*
=========================================
ROUTES
=========================================
*/

const signalRoutes =
  require("./routes/signals");

const telemetryRoutes =
  require("./routes/telemetry");

const incidentRoutes =
  require("./routes/incidents");

const escalationRoutes =
  require("./routes/escalations");

const replayRoutes =
  require("./routes/replay");

const evidenceRoutes =
  require("./routes/evidence");

const observabilityRoutes =
  require("./routes/observability");

/*
=========================================
API ROUTES
=========================================
*/

app.use(
  "/api/signals",
  signalRoutes
);

app.use(
  "/api/telemetry",
  telemetryRoutes
);

app.use(
  "/api/incidents",
  incidentRoutes
);

app.use(
  "/api/escalations",
  escalationRoutes
);

app.use(
  "/api/replay",
  replayRoutes
);

app.use(
  "/api/evidence",
  evidenceRoutes
);

app.use(
  "/api/observability",
  observabilityRoutes
);

/*
=========================================
DASHBOARD API
=========================================
*/

app.get(
  "/api/dashboard",
  (req, res) => {
    res.json({
      signals: 12,
      telemetry: 25,
      incidents: 10,
      escalations: 12,
      replay: 18,
      evidence: 32
    });
  }
);

/*
=========================================
HEALTH CHECK
=========================================
*/

app.get(
  "/api/health",
  (req, res) => {
    res.json({
      success: true,
      service: "UCCIS Runtime",
      status: "RUNNING",
      timestamp:
        new Date()
    });
  }
);

/*
=========================================
SERVER
=========================================
*/

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `UCCIS Backend Running On Port ${PORT}`
  );
});