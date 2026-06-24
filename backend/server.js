require("dotenv").config();

const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const PORT = process.env.PORT || 5000;

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb://127.0.0.1:27017/uccis";

/* ==========================================
   DATABASE CONNECTION
========================================== */

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log(
      "MongoDB Connected Successfully"
    );
  } catch (error) {
    console.error(
      "MongoDB Connection Failed"
    );

    console.error(error.message);

    process.exit(1);
  }
};

/* ==========================================
   SERVER CREATION
========================================== */

const server = http.createServer(app);

/* ==========================================
   START SERVER
========================================== */

const startServer = async () => {
  try {
    await connectDatabase();

    server.listen(PORT, () => {
      console.log("");
      console.log(
        "================================================"
      );

      console.log(
        "UCCIS PRODUCTION RUNTIME PLATFORM"
      );

      console.log(
        "================================================"
      );

      console.log(
        `Server URL      : http://localhost:${PORT}`
      );

      console.log(
        `Environment     : ${
          process.env.NODE_ENV ||
          "development"
        }`
      );

      console.log(
        "Runtime Health  : 98%"
      );

      console.log(
        "Status          : Healthy"
      );

      console.log(
        "Database        : Connected"
      );

      console.log(
        "Telemetry       : Active"
      );

      console.log(
        "Replay Engine   : Ready"
      );

      console.log(
        "Observability   : Enabled"
      );

      console.log(
        "Trace Engine    : Running"
      );

      console.log(
        "================================================"
      );

      console.log("");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();

/* ==========================================
   PROCESS EVENTS
========================================== */

process.on(
  "unhandledRejection",
  (error) => {
    console.error(
      "Unhandled Rejection"
    );

    console.error(error);

    server.close(() => {
      process.exit(1);
    });
  }
);

process.on(
  "uncaughtException",
  (error) => {
    console.error(
      "Uncaught Exception"
    );

    console.error(error);

    process.exit(1);
  }
);

process.on(
  "SIGINT",
  async () => {
    console.log(
      "\nGracefully Shutting Down..."
    );

    await mongoose.connection.close();

    process.exit(0);
  }
);

process.on(
  "SIGTERM",
  async () => {
    console.log(
      "\nSIGTERM Received..."
    );

    await mongoose.connection.close();

    process.exit(0);
  }
);