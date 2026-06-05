const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const db = require("./config/db");

const signalRoutes = require("./routes/signalRoutes");
const incidentRoutes = require("./routes/incidentRoutes");
const replayRoutes = require("./routes/replayRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();
const PORT = 5000;

/* ==========================
   MIDDLEWARE
========================== */

app.use(cors());

app.use(
  express.json({
    limit: "10mb"
  })
);

app.use(
  express.urlencoded({
    extended: true
  })
);

/* ==========================
   REQUEST LOGGER
========================== */

app.use((req, res, next) => {

  const logDir = path.join(__dirname, "logs");

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  const logFile = path.join(
    logDir,
    "runtime.log"
  );

  const message =
    `[${new Date().toISOString()}] ` +
    `${req.method} ${req.originalUrl}\n`;

  fs.appendFileSync(logFile, message);

  next();

});

/* ==========================
   HEALTH CHECK
========================== */

app.get("/", (req, res) => {

  res.status(200).json({
    application: "UCCIS Runtime Engine",
    state: "WORKING",
    convergence: "PARTIALLY_CONVERGED",
    status: "RUNNING",
    timestamp: new Date()
  });

});

/* ==========================
   DATABASE CHECK
========================== */

app.get("/api/health/db", async (req, res) => {

  try {

    const [rows] =
      await db.query(
        "SELECT NOW() AS databaseTime"
      );

    res.status(200).json({
      success: true,
      database: "CONNECTED",
      time: rows[0].databaseTime
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      database: "DISCONNECTED",
      error: error.message
    });

  }

});

/* ==========================
   ROUTES
========================== */

app.use(
  "/api/signals",
  signalRoutes
);

app.use(
  "/api/incidents",
  incidentRoutes
);

app.use(
  "/api/replay",
  replayRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

/* ==========================
   RUNTIME SUMMARY
========================== */

app.get(
  "/api/runtime/summary",
  async (req, res) => {

    try {

      const [signals] =
        await db.query(
          "SELECT COUNT(*) total FROM signals"
        );

      const [events] =
        await db.query(
          "SELECT COUNT(*) total FROM telemetry_events"
        );

      const [incidents] =
        await db.query(
          "SELECT COUNT(*) total FROM incidents"
        );

      const [escalations] =
        await db.query(
          "SELECT COUNT(*) total FROM escalations"
        );

      const [replays] =
        await db.query(
          "SELECT COUNT(*) total FROM replay_sessions"
        );

      const [logs] =
        await db.query(
          "SELECT COUNT(*) total FROM runtime_logs"
        );

      res.json({
        signals:
          signals[0].total,

        telemetryEvents:
          events[0].total,

        incidents:
          incidents[0].total,

        escalations:
          escalations[0].total,

        replaySessions:
          replays[0].total,

        runtimeLogs:
          logs[0].total
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        error: error.message
      });

    }

  }
);

/* ==========================
   FULL OPERATIONAL CHAIN
========================== */

app.get(
  "/api/runtime/chain",
  async (req, res) => {

    try {

      const [rows] =
        await db.query(`
          SELECT

          s.signal_id,
          s.signal_type,

          l.district,
          l.state,

          t.event_id,
          t.event_status,

          i.incident_id,
          i.severity,

          e.escalation_id,
          e.escalated_to,

          d.decision_text,

          a.approved_by,

          r.replay_result,

          rl.log_message

          FROM signals s

          LEFT JOIN locations l
          ON s.location_id = l.location_id

          LEFT JOIN telemetry_events t
          ON s.signal_id = t.signal_id

          LEFT JOIN incidents i
          ON t.event_id = i.event_id

          LEFT JOIN escalations e
          ON i.incident_id = e.incident_id

          LEFT JOIN decisions d
          ON e.escalation_id = d.escalation_id

          LEFT JOIN approvals a
          ON d.decision_id = a.decision_id

          LEFT JOIN replay_sessions r
          ON i.incident_id = r.incident_id

          LEFT JOIN runtime_logs rl
          ON r.replay_id = rl.replay_id

          ORDER BY s.signal_id DESC
        `);

      res.status(200).json(rows);

    } catch (error) {

      res.status(500).json({
        success: false,
        error: error.message
      });

    }

  }
);

/* ==========================
   404 HANDLER
========================== */

app.use((req, res) => {

  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });

});

/* ==========================
   ERROR HANDLER
========================== */

app.use(
  (err, req, res, next) => {

    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message
    });

  }
);

/* ==========================
   SERVER START
========================== */

app.listen(PORT, () => {

  console.log("");
  console.log("=================================");
  console.log(" UCCIS Runtime Engine Started");
  console.log("=================================");
  console.log(` Port : ${PORT}`);
  console.log(" State : WORKING");
  console.log(" Status : RUNNING");
  console.log("=================================");
  console.log("");

});