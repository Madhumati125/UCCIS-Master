const express = require("express");
const cors = require("cors");

const dashboardRoutes = require("./routes/dashboardRoutes");
const governanceRoutes = require("./routes/governanceRoutes");
const replayRoutes = require("./routes/replayRoutes");
const ingestionRoutes = require("./routes/ingestionRoutes");
const intelligenceRoutes = require("./routes/intelligenceRoutes");
const governanceConflictRoutes = require("./routes/governanceConflictRoutes");
const lifecycleRoutes = require("./routes/lifecycleRoutes");
const replayExecutionRoutes = require("./routes/replayExecutionRoutes");
const failureRoutes = require("./routes/failureRoutes");
const tantraFlowRoutes = require("./routes/tantraFlowRoutes");
const simulationRoutes = require("./routes/simulationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/governance", governanceRoutes);
app.use("/api/replay", replayRoutes);
app.use("/api/ingestion", ingestionRoutes);
app.use("/api/intelligence", intelligenceRoutes);
app.use("/api/governance-conflict", governanceConflictRoutes);
app.use("/api/lifecycle", lifecycleRoutes);
app.use("/api/replay-execution", replayExecutionRoutes);
app.use("/api/failure-engine", failureRoutes);
app.use("/api/tantra-flow", tantraFlowRoutes);
app.use("/api/run-simulation", simulationRoutes);

module.exports = app;