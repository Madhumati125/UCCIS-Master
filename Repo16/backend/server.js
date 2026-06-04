const express = require("express");
const cors = require("cors");

const replayRoutes = require("./routes/replay");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

  res.json({
    status: "UCCIS Operational Backend Running"
  });

});

app.get("/api/health", (req, res) => {

  res.json({
    system: "ACTIVE",
    replay: "READY",
    telemetry: "ACTIVE"
  });

});

app.use("/api/replay", replayRoutes);

const PORT = 5000;

app.listen(PORT, () => {

  console.log(`Backend running on ${PORT}`);

});