require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

/* ==========================================
   DATABASE CONNECTION
========================================== */

const connectDB = async () => {
  try {

    await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log(
      "MongoDB Connected Successfully"
    );

  } catch (error) {

    console.error(
      "MongoDB Connection Failed"
    );

    console.error(
      error.message
    );

    process.exit(1);

  }
};

/* ==========================================
   MIDDLEWARE
========================================== */

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

/* ==========================================
   ROOT ROUTE
========================================== */

app.get("/", (req, res) => {

  res.status(200).json({

    platform:
      "UCCIS Runtime Platform",

    version:
      "1.0.0",

    status:
      "Running",

    timestamp:
      new Date()

  });

});

/* ==========================================
   HEALTH ROUTE
========================================== */

app.get("/health", (req, res) => {

  const dbStatus =
    mongoose.connection.readyState === 1
      ? "Connected"
      : "Disconnected";

  res.json({

    service:
      "UCCIS Runtime",

    status:
      "Healthy",

    database:
      dbStatus,

    uptime:
      process.uptime(),

    timestamp:
      new Date()

  });

});

/* ==========================================
   ROUTES
========================================== */

app.use(
  "/api/runtime",
  require("./routes/runtimeRoutes")
);

app.use(
  "/api/dashboard",
  require("./routes/dashboardRoutes")
);

/* ==========================================
   TEST DATA ROUTE
========================================== */

app.get("/api/seed", async (req, res) => {

  try {

    const Signal =
      require("./models/Signal");

    const Incident =
      require("./models/Incident");

    const Escalation =
      require("./models/Escalation");

    const Replay =
      require("./models/Replay");

    const Evidence =
      require("./models/Evidence");

    await Signal.create({

      signalId:
        `SIG-${Date.now()}`,

      source:
        "Runtime Engine",

      severity:
        "Critical",

      payload: {
        message:
          "Test Signal"
      }

    });

    await Incident.create({

      incidentId:
        `INC-${Date.now()}`,

      signalId:
        `SIG-${Date.now()}`,

      traceId:
        `TRACE-${Date.now()}`,

      severity:
        "Critical",

      status:
        "Open"

    });

    await Escalation.create({

      escalationId:
        `ESC-${Date.now()}`,

      incidentId:
        `INC-${Date.now()}`,

      traceId:
        `TRACE-${Date.now()}`,

      priority:
        "Critical",

      assignedTo:
        "Runtime Team",

      status:
        "Open"

    });

    await Replay.create({

      replayId:
        `REP-${Date.now()}`,

      incidentId:
        `INC-${Date.now()}`,

      traceId:
        `TRACE-${Date.now()}`,

      status:
        "Completed",

      startedAt:
        new Date(),

      completedAt:
        new Date(),

      duration:
        1

    });

    await Evidence.create({

      evidenceId:
        `EVD-${Date.now()}`,

      replayId:
        `REP-${Date.now()}`,

      traceId:
        `TRACE-${Date.now()}`,

      status:
        "Stored"

    });

    res.json({

      success: true,

      message:
        "Seed Data Created"

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,

      message:
        error.message

    });

  }

});

/* ==========================================
   404 HANDLER
========================================== */

app.use((req, res) => {

  res.status(404).json({

    success: false,

    message:
      "Route Not Found"

  });

});

/* ==========================================
   ERROR HANDLER
========================================== */

app.use(
  (
    err,
    req,
    res,
    next
  ) => {

    console.error(err);

    res.status(
      err.status || 500
    ).json({

      success: false,

      message:
        err.message ||
        "Internal Server Error"

    });

  }
);

/* ==========================================
   START SERVER
========================================== */

const PORT =
  process.env.PORT || 5000;

const startServer =
async () => {

  await connectDB();

  app.listen(
    PORT,
    () => {

      console.log(
        `UCCIS Runtime running on port ${PORT}`
      );

    }
  );

};

startServer();

/* ==========================================
   PROCESS ERRORS
========================================== */

process.on(
  "unhandledRejection",
  err => {

    console.error(
      "Unhandled Rejection"
    );

    console.error(err);

  }
);

process.on(
  "uncaughtException",
  err => {

    console.error(
      "Uncaught Exception"
    );

    console.error(err);

  }
);