const express = require("express");
const cors = require("cors");

const logger =
require("./middleware/logger");

const requestTracker =
require("./middleware/requestTracker");

const errorHandler =
require("./middleware/errorHandler");

const signalRoutes =
require("./routes/signalRoutes");

const incidentRoutes =
require("./routes/incidentRoutes");

const escalationRoutes =
require("./routes/escalationRoutes");

const replayRoutes =
require("./routes/replayRoutes");

const evidenceRoutes =
require("./routes/evidenceRoutes");

const runtimeRoutes =
require("./routes/runtimeRoutes");

const telemetryRoutes =
require("./routes/telemetryRoutes");

const observabilityRoutes =
require("./routes/observabilityRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(logger);

app.use(requestTracker);

app.get("/", (req, res) => {
  res.json({
    application:
      "UCCIS Runtime Platform",

    version: "1.0.0",

    runtimeHealth: "98%",

    status: "Healthy",

    traceId: req.traceId
  });
});

app.use(
"/api/signals",
signalRoutes
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
"/api/replays",
replayRoutes
);

app.use(
"/api/evidence",
evidenceRoutes
);

app.use(
"/api/runtime",
runtimeRoutes
);

app.use(
"/api/telemetry",
telemetryRoutes
);

app.use(
"/api/observability",
observabilityRoutes
);

app.use(errorHandler);

module.exports = app;