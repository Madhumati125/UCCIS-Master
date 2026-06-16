require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./config/db");

/*
=====================================================
ROUTES
=====================================================
*/

const runtimeRoutes =
  require("./routes/runtimeRoutes");

const replayRoutes =
  require("./routes/replayRoutes");

const healthRoutes =
  require("./routes/healthRoutes");

const commandCenterRoutes =
  require("./routes/commandCenterRoutes");

/*
=====================================================
MIDDLEWARE
=====================================================
*/

const requestLogger =
  require("./middleware/requestLogger");

const traceMiddleware =
  require("./middleware/traceMiddleware");

const runtimeAudit =
  require("./middleware/runtimeAudit");

const notFound =
  require("./middleware/notFound");

const errorHandler =
  require("./middleware/errorHandler");

/*
=====================================================
APP
=====================================================
*/

const app = express();

/*
=====================================================
CORE MIDDLEWARE
=====================================================
*/

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

/*
=====================================================
STATIC FILES
=====================================================
*/

app.use(
  express.static(
    path.join(
      __dirname,
      "public"
    )
  )
);

/*
=====================================================
LOGGING
=====================================================
*/

app.use(requestLogger);

app.use(traceMiddleware);

app.use(runtimeAudit);

/*
=====================================================
ROOT
=====================================================
*/

app.get("/", (req, res) => {

  res.status(200).json({
    success: true,
    application:
      "UCCIS Runtime Command Center",
    version: "1.0.0",
    status: "RUNNING",
    database:
      process.env.DB_NAME,
    timestamp:
      new Date()
  });

});

/*
=====================================================
FAVICON FIX
=====================================================
*/

app.get(
  "/favicon.ico",
  (req, res) => {

    return res
      .status(204)
      .end();

  }
);

/*
=====================================================
SYSTEM INFO
=====================================================
*/

app.get(
  "/api/system/info",
  async (req, res) => {

    try {

      const stats =
        await db.getDatabaseStats();

      res.json({
        success: true,
        application:
          "UCCIS Runtime Command Center",

        nodeVersion:
          process.version,

        platform:
          process.platform,

        uptime:
          process.uptime(),

        database: stats
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        error:
          error.message
      });

    }

  }
);

/*
=====================================================
DATABASE HEALTH
=====================================================
*/

app.get(
  "/api/system/database",
  async (req, res) => {

    try {

      const result =
        await db.checkDatabaseHealth();

      res.json(result);

    } catch (error) {

      res.status(500).json({
        success: false,
        error:
          error.message
      });

    }

  }
);

/*
=====================================================
RUNTIME HEALTH
=====================================================
*/

app.get(
  "/api/system/runtime",
  async (req, res) => {

    try {

      const memory =
        process.memoryUsage();

      res.json({
        success: true,

        uptime:
          process.uptime(),

        memory: {
          rss:
            memory.rss,

          heapTotal:
            memory.heapTotal,

          heapUsed:
            memory.heapUsed
        },

        cpu:
          process.cpuUsage(),

        timestamp:
          new Date()
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        error:
          error.message
      });

    }

  }
);

/*
=====================================================
API ROUTES
=====================================================
*/

app.use(
  "/api/runtime",
  runtimeRoutes
);

app.use(
  "/api/replay",
  replayRoutes
);

app.use(
  "/api/health",
  healthRoutes
);

app.use(
  "/api/command-center",
  commandCenterRoutes
);

/*
=====================================================
404 HANDLER
=====================================================
*/

app.use(notFound);

/*
=====================================================
ERROR HANDLER
=====================================================
*/

app.use(errorHandler);

/*
=====================================================
START SERVER
=====================================================
*/

const PORT =
  process.env.PORT || 5000;

const server =
  app.listen(
    PORT,
    () => {

      console.log("");
      console.log(
        "===================================="
      );

      console.log(
        "🚀 UCCIS COMMAND CENTER STARTED"
      );

      console.log(
        "===================================="
      );

      console.log(
        `🌐 PORT : ${PORT}`
      );

      console.log(
        `📅 STARTED : ${new Date().toLocaleString()}`
      );

      console.log(
        "===================================="
      );

      console.log("");

    }
  );

/*
=====================================================
GRACEFUL SHUTDOWN
=====================================================
*/

const shutdown =
  async () => {

    console.log(
      "\n🛑 Shutting Down..."
    );

    server.close(
      async () => {

        try {

          await db
            .promise()
            .end();

          console.log(
            "✅ Database Closed"
          );

          console.log(
            "✅ Server Stopped"
          );

          process.exit(0);

        } catch (error) {

          console.error(
            error.message
          );

          process.exit(1);

        }

      }
    );

  };

process.on(
  "SIGINT",
  shutdown
);

process.on(
  "SIGTERM",
  shutdown
);

module.exports = app;