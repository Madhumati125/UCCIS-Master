const express = require("express");
const cors = require("cors");

const signalRoutes = require("./routes/signalRoutes");
const incidentRoutes = require("./routes/incidentRoutes");
const escalationRoutes = require("./routes/escalationRoutes");
const replayRoutes = require("./routes/replayRoutes");
const runtimeRoutes = require("./routes/runtimeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/signals", signalRoutes);
app.use("/api/incidents", incidentRoutes);
app.use("/api/escalations", escalationRoutes);
app.use("/api/replay", replayRoutes);
app.use("/api/runtime", runtimeRoutes);

module.exports = app;