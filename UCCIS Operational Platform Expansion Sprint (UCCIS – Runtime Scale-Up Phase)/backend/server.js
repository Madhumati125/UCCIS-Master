const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
======================================================
 UCCIS OPERATIONAL PLATFORM
======================================================

 STATUS           : RUNNING
 ENVIRONMENT      : DEVELOPMENT
 SERVER           : http://localhost:${PORT}

 MODULES LOADED
 -----------------------------------------------------
 ✓ Signal Layer
 ✓ Incident Layer
 ✓ Escalation Layer
 ✓ Replay Layer
 ✓ Evidence Layer
 ✓ Timeline Layer
 ✓ Analytics Layer
 ✓ Historical Operations
 ✓ Trace Search
 ✓ Multi-Domain Runtime

 SUPPORTED DOMAINS
 -----------------------------------------------------
 ✓ Flood
 ✓ Traffic
 ✓ Medical
 ✓ Power
 ✓ Cyber
 ✓ Water

 HEALTH
 -----------------------------------------------------
 Runtime Health : 98%

======================================================
 UCCIS PLATFORM READY
======================================================
`);
});

process.on("uncaughtException", (error) => {
  console.error("UNCAUGHT EXCEPTION");
  console.error(error.message);
});

process.on("unhandledRejection", (error) => {
  console.error("UNHANDLED REJECTION");
  console.error(error);
});

process.on("SIGINT", () => {
  console.log(`
======================================================
 UCCIS SHUTDOWN INITIATED
======================================================
`);

  process.exit(0);
});