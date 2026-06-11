require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./config/db");

const signalRoutes = require("./routes/signalRoutes");
const incidentRoutes = require("./routes/incidentRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const runtimeRoutes = require("./routes/runtimeRoutes");

const app = express();

app.use(cors());

app.use(
  express.json({
    limit: "20mb"
  })
);

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`
  );
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    system: "UCCIS Command Center",
    status: "ONLINE",
    runtime: "ACTIVE",
    version: "1.0.0",
    timestamp: new Date()
  });
});

app.get("/api/health", async (req, res) => {
  try {
    await db.promise().query("SELECT 1");

    res.status(200).json({
      backend: "ONLINE",
      database: "CONNECTED",
      runtimeEngine: "ACTIVE",
      telemetryEngine: "ACTIVE",
      escalationEngine: "ACTIVE",
      replayEngine: "ACTIVE",
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({
      backend: "ONLINE",
      database: "DISCONNECTED",
      runtimeEngine: "DEGRADED",
      error: error.message
    });
  }
});

app.use("/api/signals", signalRoutes);

app.use("/api/incidents", incidentRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/runtime", runtimeRoutes);

app.get("/api/demo/flood", async (req, res) => {
  try {
    const payload = {
      trace_id: `TRC-FLOOD-${Date.now()}`,
      signal_type: "Flood Alert",
      source_system: "River Sensor",
      location: "Pune",
      severity: "HIGH",
      confidence: 95,
      payload: {
        water_level: "8.5m",
        river: "Mula"
      }
    };

    res.json(payload);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/demo/traffic", async (req, res) => {
  try {
    const payload = {
      trace_id: `TRC-TRAFFIC-${Date.now()}`,
      signal_type: "Traffic Incident",
      source_system: "Traffic Camera",
      location: "Shivaji Nagar",
      severity: "MEDIUM",
      confidence: 89,
      payload: {
        junction: "University Circle",
        congestion: "High"
      }
    };

    res.json(payload);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/api/demo/cyber", async (req, res) => {
  try {
    const payload = {
      trace_id: `TRC-CYBER-${Date.now()}`,
      signal_type: "Cyber Incident",
      source_system: "SOC",
      location: "Primary Datacenter",
      severity: "CRITICAL",
      confidence: 98,
      payload: {
        attack: "DDoS",
        target: "Citizen Services Portal"
      }
    };

    res.json(payload);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
    path: req.originalUrl
  });
});

app.use((error, req, res, next) => {
  console.error("SERVER ERROR:", error);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: error.message
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await db.promise().query("SELECT 1");

    console.log("");
    console.log("================================");
    console.log("UCCIS COMMAND CENTER");
    console.log("================================");
    console.log("Backend Status   : ONLINE");
    console.log("Database Status  : CONNECTED");
    console.log("Runtime Engine   : ACTIVE");
    console.log("Telemetry Engine : ACTIVE");
    console.log("Replay Engine    : ACTIVE");
    console.log(`Port             : ${PORT}`);
    console.log("================================");
    console.log("");

    app.listen(PORT, () => {
      console.log(
        `UCCIS Runtime Listening On Port ${PORT}`
      );
    });
  } catch (error) {
    console.error("Database Connection Failed");
    console.error(error.message);
    process.exit(1);
  }
};

startServer();