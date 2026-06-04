const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/zones", require("./routes/zoneRoutes"));
app.use("/api/ingestion", require("./routes/ingestionRoutes"));
app.use("/api/governance", require("./routes/governanceRoutes"));
app.use("/api/execution", require("./routes/executionRoutes"));
app.use("/api/replay", require("./routes/replayRoutes"));

module.exports = app;