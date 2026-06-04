const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// ===============================
// DATABASE
// ===============================

const db = require("./config/db");

// ===============================
// MODELS
// ===============================

const createSignalTable = require("./models/Signal");
const createTelemetryTable = require("./models/Telemetry");
const createIncidentTable = require("./models/Incident");
const createAlertTable = require("./models/Alert");
const createRecommendationTable = require("./models/Recommendation");
const createDecisionTable = require("./models/Decision");
const createApprovalTable = require("./models/Approval");
const createEscalationTable = require("./models/Escalation");
const createInterventionTable = require("./models/Intervention");
const createReplayTable = require("./models/Replay");
const createRuntimeTable = require("./models/Runtime");
const createOperatorTable = require("./models/Operator");
const createWorkflowStateTable = require("./models/WorkflowState");
const createSourceTable = require("./models/Source");
const createLocationTable = require("./models/Location");
const createUncertaintyTable = require("./models/Uncertainty");
const createConfidenceTable = require("./models/Confidence");
const createTimelineCheckpointTable =
  require("./models/TimelineCheckpoint");

// ===============================
// ROUTES
// ===============================

const signalRoutes = require("./routes/signals");
const telemetryRoutes = require("./routes/telemetry");
const incidentRoutes = require("./routes/incidents");
const alertRoutes = require("./routes/alerts");
const runtimeRoutes = require("./routes/runtime");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// CREATE TABLES
// ===============================

createSignalTable();
createTelemetryTable();
createIncidentTable();
createAlertTable();
createRecommendationTable();
createDecisionTable();
createApprovalTable();
createEscalationTable();
createInterventionTable();
createReplayTable();
createRuntimeTable();
createOperatorTable();
createWorkflowStateTable();
createSourceTable();
createLocationTable();
createUncertaintyTable();
createConfidenceTable();
createTimelineCheckpointTable();

console.log("UCCIS Schema Initialized");

// ===============================
// CORE ROUTES
// ===============================

app.use("/api/signals", signalRoutes);
app.use("/api/telemetry", telemetryRoutes);
app.use("/api/incidents", incidentRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/runtime", runtimeRoutes);

// ===============================
// ROOT
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    application: "UCCIS",
    version: "1.0.0",
    phase: "Operational Intelligence Convergence"
  });
});

// ===============================
// HEALTH
// ===============================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "RUNNING",
    timestamp: new Date().toISOString()
  });
});

// ===============================
// DASHBOARD STATS
// ===============================

app.get("/api/dashboard/stats", (req, res) => {
  const stats = {};

  db.get(
    "SELECT COUNT(*) AS total FROM signals",
    [],
    (e1, s) => {
      stats.signals = s?.total || 0;

      db.get(
        "SELECT COUNT(*) AS total FROM incidents",
        [],
        (e2, i) => {
          stats.incidents = i?.total || 0;

          db.get(
            "SELECT COUNT(*) AS total FROM telemetry",
            [],
            (e3, t) => {
              stats.telemetry = t?.total || 0;

              db.get(
                "SELECT COUNT(*) AS total FROM runtimes",
                [],
                (e4, r) => {
                  stats.runtime = r?.total || 0;

                  res.json({
                    success: true,
                    data: stats
                  });
                }
              );
            }
          );
        }
      );
    }
  );
});

// ===============================
// DATASET REALISM
// ===============================

app.get("/api/datasets/:name", (req, res) => {
  try {
    const datasetName = req.params.name;

    const filePath = path.join(
      process.cwd(),
      "datasets",
      `${datasetName}.json`
    );

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: "Dataset not found"
      });
    }

    const data = JSON.parse(
      fs.readFileSync(filePath, "utf8")
    );

    res.json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ===============================
// OPERATIONAL CHAIN
// ===============================

app.get("/api/operational-chain", (req, res) => {
  try {
    const filePath = path.join(
      process.cwd(),
      "datasets",
      "operational_chain.json"
    );

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: "Operational chain missing"
      });
    }

    const data = JSON.parse(
      fs.readFileSync(filePath, "utf8")
    );

    res.json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ===============================
// RUNTIME LOGS
// ===============================

app.get("/api/runtime-logs/:name", (req, res) => {
  try {
    const logName = req.params.name;

    const filePath = path.join(
      process.cwd(),
      "runtime_logs",
      `${logName}.log`
    );

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        logs: "No logs available."
      });
    }

    const logs = fs.readFileSync(filePath, "utf8");

    res.json({
      success: true,
      logName,
      logs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ===============================
// SEED
// ===============================

app.get("/api/seed", (req, res) => {
  db.serialize(() => {
    db.run(`
      INSERT INTO incidents
      (title,severity,status,created_at)
      VALUES
      ('Traffic Junction Failure','HIGH','OPEN',datetime('now')),
      ('Flood Surge Warning','CRITICAL','OPEN',datetime('now'))
    `);

    db.run(`
      INSERT INTO runtimes
      (service_name,status,updated_at)
      VALUES
      ('Backend Service','RUNNING',datetime('now')),
      ('Telemetry Engine','RUNNING',datetime('now')),
      ('Replay Engine','RUNNING',datetime('now'))
    `);
  });

  res.json({
    success: true,
    message: "Seed completed"
  });
});

// ===============================
// 404
// ===============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// ===============================
// START
// ===============================

app.listen(PORT, () => {
  console.log(`
================================
UCCIS BACKEND STARTED
http://localhost:${PORT}
================================
`);
});