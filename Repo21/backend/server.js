const express = require("express");

const cors = require("cors");

const fs = require("fs");

const path = require("path");

const app = express();

app.use(cors());

const PORT = 5000;

/* ================================================= */
/* ROOT ROUTE */
/* ================================================= */

app.get("/", (req, res) => {

  res.send("Backend Running");

});

/* ================================================= */
/* READ LOG FILE */
/* ================================================= */

const readLog = (fileName) => {

  try {

    const filePath = path.join(
      __dirname,
      "runtime_logs",
      fileName
    );

    const data = fs.readFileSync(filePath, "utf8");

    return data;

  } catch (error) {

    return "No logs available.";
  }
};

/* ================================================= */
/* BACKEND LOG */
/* ================================================= */

app.get("/api/backend-log", (req, res) => {

  res.json({
    logs: readLog("backend.log")
  });

});

/* ================================================= */
/* ESCALATION LOG */
/* ================================================= */

app.get("/api/escalation-log", (req, res) => {

  res.json({
    logs: readLog("escalation.log")
  });

});

/* ================================================= */
/* REPLAY LOG */
/* ================================================= */

app.get("/api/replay-log", (req, res) => {

  res.json({
    logs: readLog("replay.log")
  });

});

/* ================================================= */
/* TELEMETRY LOG */
/* ================================================= */

app.get("/api/telemetry-log", (req, res) => {

  res.json({
    logs: readLog("telemetry.log")
  });

});

/* ================================================= */
/* START SERVER */
/* ================================================= */

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});