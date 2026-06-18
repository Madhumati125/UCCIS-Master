const express = require("express");
const cors = require("cors");

const loggerMiddleware = require("./middleware/loggerMiddleware");
const traceMiddleware = require("./middleware/traceMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

const signalRoutes = require("./routes/signalRoutes");
const telemetryRoutes = require("./routes/telemetryRoutes");
const incidentRoutes = require("./routes/incidentRoutes");
const escalationRoutes = require("./routes/escalationRoutes");
const replayRoutes = require("./routes/replayRoutes");
const evidenceRoutes = require("./routes/evidenceRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const observabilityRoutes = require("./routes/observabilityRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(loggerMiddleware);

app.use(traceMiddleware);

app.get("/", (req, res) => {
  res.status(200).json({
    platform: "UCCIS Canonical Platform",
    status: "ACTIVE",
    traceId: req.traceId
  });
});

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
  "/api/dashboard",
  dashboardRoutes
);

app.use(
  "/api/observability",
  observabilityRoutes
);

app.use(errorMiddleware);

module.exports = app;