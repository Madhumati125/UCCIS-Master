require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/*
========================================
ROOT
========================================
*/

app.get("/", (req, res) => {
  res.json({
    success: true,
    project: "UCCIS Command Center",
    status: "RUNNING",
    timestamp: new Date()
  });
});

/*
========================================
HEALTH
========================================
*/

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    backend: "ONLINE",
    database: "CONNECTED",
    runtime: "ACTIVE",
    timestamp: new Date()
  });
});

/*
========================================
DASHBOARD
========================================
*/

app.get("/api/dashboard", (req, res) => {
  res.json({
    success: true,
    systemHealth: "ONLINE",
    activeSignals: 12,
    activeIncidents: 4,
    escalations: 2,
    replayEvents: 15,
    runtimeLogs: 38
  });
});

/*
========================================
SIGNALS
========================================
*/

app.get("/api/signals", (req, res) => {
  res.json({
    success: true,
    count: 3,
    data: [
      {
        signal_id: 101,
        signal_type: "Flood Alert",
        status: "ACTIVE"
      },
      {
        signal_id: 102,
        signal_type: "Traffic Alert",
        status: "ACTIVE"
      },
      {
        signal_id: 103,
        signal_type: "Cyber Alert",
        status: "ACTIVE"
      }
    ]
  });
});

/*
========================================
INCIDENTS
========================================
*/

app.get("/api/incidents", (req, res) => {
  res.json({
    success: true,
    count: 2,
    data: [
      {
        incident_id: 1,
        incident_name: "Flood Emergency",
        severity: "HIGH"
      },
      {
        incident_id: 2,
        incident_name: "Traffic Incident",
        severity: "MEDIUM"
      }
    ]
  });
});

/*
========================================
RUNTIME LOGS
========================================
*/

app.get("/api/runtime", (req, res) => {
  res.json({
    success: true,
    count: 4,
    data: [
      {
        log_id: 1,
        log_message: "Signal Received",
        level: "INFO"
      },
      {
        log_id: 2,
        log_message: "Telemetry Generated",
        level: "INFO"
      },
      {
        log_id: 3,
        log_message: "Incident Created",
        level: "WARNING"
      },
      {
        log_id: 4,
        log_message: "Escalation Triggered",
        level: "CRITICAL"
      }
    ]
  });
});

/*
========================================
REPLAY EVENTS
========================================
*/

app.get("/api/replay", (req, res) => {
  res.json({
    success: true,
    count: 2,
    data: [
      {
        replay_id: 1,
        trace_reference: "TRACE-001",
        status: "COMPLETED"
      },
      {
        replay_id: 2,
        trace_reference: "TRACE-002",
        status: "COMPLETED"
      }
    ]
  });
});

/*
========================================
SCENARIOS
========================================
*/

app.get("/api/scenarios/flood", (req, res) => {
  res.json({
    success: true,
    scenario: "Flood Emergency",
    chain: [
      "Signal",
      "Telemetry",
      "Incident",
      "Escalation",
      "Decision",
      "Replay",
      "Runtime"
    ]
  });
});

app.get("/api/scenarios/traffic", (req, res) => {
  res.json({
    success: true,
    scenario: "Traffic Incident"
  });
});

app.get("/api/scenarios/cyber", (req, res) => {
  res.json({
    success: true,
    scenario: "Cyber Incident"
  });
});

app.get("/api/scenarios/medical", (req, res) => {
  res.json({
    success: true,
    scenario: "Medical Emergency"
  });
});

/*
========================================
RUNTIME STATUS
========================================
*/

app.get("/api/runtime-status", (req, res) => {
  res.json({
    success: true,
    runtimeEngine: "ACTIVE",
    signalProcessor: "RUNNING",
    incidentEngine: "RUNNING",
    escalationEngine: "RUNNING",
    replayEngine: "READY"
  });
});

/*
========================================
404
========================================
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint Not Found"
  });
});

/*
========================================
SERVER START
========================================
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("================================");
  console.log("UCCIS COMMAND CENTER RUNNING");
  console.log(`PORT: ${PORT}`);
  console.log("================================");
});