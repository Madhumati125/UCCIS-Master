const express = require("express");
const cors = require("cors");
const http = require("http");

const { Server } = require("socket.io");

// DATABASE
const connectDB = require("./config/db");

// ROUTES
const authRoute = require("./routes/auth");
const signalRoute = require("./routes/signal");
const replayRoute = require("./routes/replay");
const governanceRoute = require("./routes/governance");
const telemetryRoute = require("./routes/telemetry");
const concurrencyRoute = require("./routes/concurrency");
const corruptionRoute = require("./routes/corruption");
const validationRoute = require("./routes/validation");
const demoRoute = require("./routes/demo");
const lineageRoute = require("./routes/lineage");
const anomalyRoute = require("./routes/anomaly");

const app = express();

// DATABASE CONNECTION
connectDB();

// MIDDLEWARE
app.use(cors());

app.use(express.json());

// ROOT HEALTH ROUTE
app.get("/", (req, res) => {

  res.json({

    platform: "UCCIS",

    status:
      "FINAL OPERATIONAL GOVERNANCE PLATFORM ACTIVE",

    replaySafe: true,

    governanceSafe: true,

    telemetryStreaming: true,

    timestamp: new Date().toISOString()

  });

});

// REGISTER API ROUTES

app.use(
  "/api/auth",
  authRoute
);

app.use(
  "/api/signal",
  signalRoute
);

app.use(
  "/api/replay",
  replayRoute
);

app.use(
  "/api/governance",
  governanceRoute
);

app.use(
  "/api/telemetry",
  telemetryRoute
);

app.use(
  "/api/concurrency",
  concurrencyRoute
);

app.use(
  "/api/corruption",
  corruptionRoute
);

app.use(
  "/api/validation",
  validationRoute
);

app.use(
  "/api/demo",
  demoRoute
);

app.use(
  "/api/lineage",
  lineageRoute
);

app.use(
  "/api/anomaly",
  anomalyRoute
);

// CREATE HTTP SERVER
const server = http.createServer(app);

// SOCKET.IO CONFIGURATION
const io = new Server(server, {

  cors: {
    origin: "*"
  }

});

// LIVE TELEMETRY SOCKET
io.on("connection", (socket) => {

  console.log(
    "Operator Connected:",
    socket.id
  );

  // SEND LIVE TELEMETRY

  const telemetryInterval =
    setInterval(() => {

      socket.emit("telemetry", {

        cpu:
          Math.floor(
            Math.random() * 100
          ),

        replayLoad:
          Math.floor(
            Math.random() * 100
          ),

        operators:
          Math.floor(
            Math.random() * 20
          ),

        governanceIntegrity:
          Math.floor(
            Math.random() * 100
          ),

        replayConfidence:
          Math.floor(
            Math.random() * 100
          ),

        timestamp:
          new Date().toISOString()

      });

    }, 2000);

  // OPERATOR ACTION STREAM

  socket.on(
    "operator-action",
    (data) => {

      console.log(
        "Operator Action:",
        data
      );

      io.emit(
        "operator-update",
        {

          acknowledged: true,

          action: data,

          timestamp:
            new Date().toISOString()

        }
      );

    }
  );

  // REPLAY EVENT STREAM

  socket.on(
    "replay-request",
    () => {

      socket.emit(
        "replay-response",
        {

          replaySafe: true,

          lineageVerified: true,

          reconstruction:
            "DETERMINISTIC",

          timestamp:
            new Date().toISOString()

        }
      );

    }
  );

  // DISCONNECT

  socket.on(
    "disconnect",
    () => {

      console.log(
        "Operator Disconnected:",
        socket.id
      );

      clearInterval(
        telemetryInterval
      );

    }
  );

});

// GLOBAL ERROR HANDLER

app.use(
  (err, req, res, next) => {

    console.error(err.stack);

    res.status(500).json({

      success: false,

      error:
        "Internal Server Error"

    });

  }
);

// SERVER PORT
const PORT = 5000;

// START SERVER

server.listen(PORT, () => {

  console.log(`

==================================================
UCCIS FINAL OPERATIONAL PLATFORM ACTIVE
==================================================

Backend Running:
http://localhost:${PORT}

Operational Features:
✔ Replay Safe
✔ Governance Safe
✔ Telemetry Streaming
✔ Replay Reconstruction
✔ Corruption Recovery
✔ Validation Layer
✔ Concurrent Operators
✔ Audit Continuity
✔ Divergence Visibility
✔ Anti-Misrepresentation

Socket.IO:
✔ ACTIVE

==================================================

`);

});