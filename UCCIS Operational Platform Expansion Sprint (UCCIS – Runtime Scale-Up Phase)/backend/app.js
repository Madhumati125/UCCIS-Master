const express = require("express");
const cors = require("cors");

const signalsRoute = require("./routes/signals");
const incidentsRoute = require("./routes/incidents");
const replayRoute = require("./routes/replay");
const timelineRoute = require("./routes/timeline");
const analyticsRoute = require("./routes/analytics");
const historicalRoute = require("./routes/historical");
const domainsRoute = require("./routes/domains");
const evidenceRoute = require("./routes/evidence");
const traceRoute = require("./routes/trace");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    application: "UCCIS Runtime Platform",
    version: "2.0.0",
    status: "Operational"
  });
});

/* ROUTES */

app.use("/api/signals", signalsRoute);

app.use("/api/incidents", incidentsRoute);

app.use("/api/replay", replayRoute);

app.use("/api/timeline", timelineRoute);

app.use("/api/analytics", analyticsRoute);

app.use("/api/history", historicalRoute);

app.use("/api/domains", domainsRoute);

app.use("/api/evidence", evidenceRoute);

app.use("/api/trace", traceRoute);

/* HEALTH CHECK */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    runtimeHealth: "98%",
    activeSignals: 24,
    activeIncidents: 18,
    escalations: 6,
    replayCount: 12,
    timestamp: new Date()
  });
});

/* 404 HANDLER - EXPRESS 5 COMPATIBLE */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

module.exports = app;