require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const connectDB = require("./config/db");

const logger = require("./middleware/logger");
const traceMiddleware = require("./middleware/traceMiddleware");
const errorHandler = require("./middleware/errorHandler");

const RuntimeScheduler = require("./runtime/RuntimeScheduler");

// Routes
const runtimeRoutes = require("./routes/runtime.routes");
const signalRoutes = require("./routes/signal.routes");
const telemetryRoutes = require("./routes/telemetry.routes");
const incidentRoutes = require("./routes/incident.routes");
const escalationRoutes = require("./routes/escalation.routes");
const replayRoutes = require("./routes/replay.routes");
const evidenceRoutes = require("./routes/evidence.routes");
const analyticsRoutes = require("./routes/analytics.routes");
const observabilityRoutes = require("./routes/observability.routes");

const app = express();

// Database Connection
connectDB();

// Middlewares
app.use(cors());

app.use(
  express.json({
    limit: "10mb"
  })
);

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(logger);

app.use(traceMiddleware);

// Root Endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    application: "UCCIS",
    version: "Phase-IV",
    status: "Running",
    timestamp: new Date()
  });
});

// Runtime APIs
app.use(
  "/api/runtime",
  runtimeRoutes
);

// Signal APIs
app.use(
  "/api/signals",
  signalRoutes
);

// Telemetry APIs
app.use(
  "/api/telemetry",
  telemetryRoutes
);

// Incident APIs
app.use(
  "/api/incidents",
  incidentRoutes
);

// Escalation APIs
app.use(
  "/api/escalations",
  escalationRoutes
);

// Replay APIs
app.use(
  "/api/replay",
  replayRoutes
);

// Evidence APIs
app.use(
  "/api/evidence",
  evidenceRoutes
);

// Analytics APIs
app.use(
  "/api/analytics",
  analyticsRoutes
);

// Observability APIs
app.use(
  "/api/observability",
  observabilityRoutes
);

// Runtime Health
app.get(
  "/api/health",
  async (req, res) => {
    try {
      const dbStatus =
        mongoose.connection.readyState === 1
          ? "Connected"
          : "Disconnected";

      res.status(200).json({
        service: "UCCIS Runtime Engine",

        status: "Healthy",

        database: dbStatus,

        uptime: process.uptime(),

        memoryUsage:
          process.memoryUsage(),

        timestamp: new Date()
      });
    } catch (error) {
      res.status(500).json({
        status: "Failed",
        error: error.message
      });
    }
  }
);

// Runtime Metrics
app.get(
  "/api/runtime-metrics",
  (req, res) => {
    res.status(200).json({
      runtimeHealth: 98,

      activeSignals: 124,

      activeIncidents: 17,

      escalations: 6,

      replayCount: 83,

      evidenceRecords: 212,

      throughput: 550,

      latency: 118,

      errors: 1,

      serviceStatus: "Healthy",

      dependencyStatus:
        "Healthy",

      timestamp: new Date()
    });
  }
);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

// Global Error Handler
app.use(errorHandler);

// Start Runtime Scheduler
RuntimeScheduler.start();

// Start Server
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    "================================="
  );

  console.log(
    "UCCIS Production Runtime Started"
  );

  console.log(
    `Port : ${PORT}`
  );

  console.log(
    `Environment : ${
      process.env.NODE_ENV ||
      "development"
    }`
  );

  console.log(
    `Started At : ${new Date()}`
  );

  console.log(
    "================================="
  );
});