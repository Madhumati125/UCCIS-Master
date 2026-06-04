const express = require("express");
const cors = require("cors");

const signalRoutes = require("./src/routes/signalRoutes");
const replayRoutes = require("./src/routes/replayRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/signal", signalRoutes);
app.use("/api/replay", replayRoutes);

module.exports = app;