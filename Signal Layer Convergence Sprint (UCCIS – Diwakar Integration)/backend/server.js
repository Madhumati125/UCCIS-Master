const express = require("express");
const cors = require("cors");

// ==========================
// CORE APP INIT
// ==========================
const app = express();

app.use(cors());
app.use(express.json());

// ==========================
// EXISTING ROUTES (KEEP YOURS)
// ==========================

// Example existing routes (DO NOT REMOVE YOUR REAL ONES)
const systemHealthRoutes = require("./routes/systemHealth");
const dashboardRoutes = require("./routes/dashboard");
const incidentRoutes = require("./routes/incidents");

app.use("/api/system", systemHealthRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/incidents", incidentRoutes);

// ==========================
// 🔥 SIGNAL INTEGRATION LAYER (NEW ADDITION)
// ==========================

const signalRoutes = require("./signal-adapter/signalRoutes");

// All signal-driven runtime flows
app.use("/api/signals", signalRoutes);

// Optional: direct runtime trigger via signals (if needed)
const { processSignals } = require("./signal-adapter/signalController");

app.get("/api/runtime/run-signals", async (req, res) => {
  try {
    const result = await processSignals();
    res.json({
      success: true,
      message: "Signal-driven runtime executed",
      data: result
    });
  } catch (err) {
    console.error("Runtime error:", err.message);
    res.status(500).json({
      success: false,
      message: "Runtime execution failed",
      error: err.message
    });
  }
});

// ==========================
// HEALTH CHECK
// ==========================
app.get("/api/health", (req, res) => {
  res.json({
    status: "ONLINE",
    system: "UCCIS BACKEND",
    runtime: "ACTIVE",
    signal_layer: "INTEGRATED"
  });
});

// ==========================
// SERVER START
// ==========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`🚀 UCCIS Backend running on port ${PORT}`);
  console.log("🔗 Signal Layer: ACTIVE");
  console.log("⚡ Runtime Engine: READY");
  console.log("====================================");
});