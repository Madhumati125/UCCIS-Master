const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const replayRoutes = require("./routes/replayRoutes");
const entropyRoutes = require("./routes/entropyRoutes");
const governanceRoutes = require("./routes/governanceRoutes");
const telemetryRoutes = require("./routes/telemetryRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/replay", replayRoutes);

app.use("/api/entropy", entropyRoutes);

app.use("/api/governance", governanceRoutes);

app.use("/api/telemetry", telemetryRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "UCCIS Backend Running"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});