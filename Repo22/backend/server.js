const express = require("express");
const cors = require("cors");

const telemetryRoutes = require("./routes/telemetryRoutes");
const escalationRoutes = require("./routes/escalationRoutes");
const replayRoutes = require("./routes/replayRoutes");
const simulationRoutes = require("./routes/simulationRoutes");
const runtimeRoutes = require("./routes/runtimeRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/telemetry", telemetryRoutes);

app.use("/api/escalations", escalationRoutes);

app.use("/api/replay", replayRoutes);

app.use("/api/simulation", simulationRoutes);

app.use("/api/runtime", runtimeRoutes);

app.get("/", (req, res) => {
  res.send("UCCIS Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `UCCIS Backend Running On Port ${PORT}`
  );
});