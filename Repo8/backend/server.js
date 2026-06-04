const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/**
 * =========================
 * MOCK DATASET (replace with real APIs later)
 * =========================
 */
const weather = require("./datasets/weather.json");

/**
 * =========================
 * ENGINE FUNCTIONS (SAFE IMPORT STYLE)
 * =========================
 */
const normalizeAll = require("./engine/normalize").normalizeAll;
const computeRisk = require("./engine/riskEngine").computeRisk;
const generateReasoning = require("./engine/reasoningEngine").generateReasoning;
const detectAnomalies = require("./engine/anomalyEngine").detectAnomalies;
const replayState = require("./engine/replayEngine").replayState;

/**
 * =========================
 * MEMORY (REPLAY STORAGE)
 * =========================
 */
let STATE_HISTORY = [];

/**
 * =========================
 * ROOT ROUTE (FIX: Cannot GET /)
 * =========================
 */
app.get("/", (req, res) => {
  res.json({
    system: "UCCIS Intelligence Engine",
    status: "RUNNING",
    message: "Backend is active 🚀",
    routes: [
      "/api/intelligence-run",
      "/api/replay",
      "/api/health",
    ],
  });
});

/**
 * =========================
 * HEALTH CHECK
 * =========================
 */
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    time: new Date().toISOString(),
  });
});

/**
 * =========================
 * MAIN INTELLIGENCE PIPELINE (ZONE ENABLED)
 * =========================
 */
app.get("/api/intelligence-run", (req, res) => {
  try {
    /**
     * STEP 1 - NORMALIZE
     */
    const normalized = normalizeAll(weather);

    /**
     * STEP 2 - ZONE GROUPING
     */
    const zones = {};

    normalized.forEach((item) => {
      if (!zones[item.zone_id]) {
        zones[item.zone_id] = [];
      }
      zones[item.zone_id].push(item);
    });

    /**
     * STEP 3 - RISK ENGINE
     */
    const risk = computeRisk(normalized);

    /**
     * STEP 4 - REASONING ENGINE
     */
    const reasoning = generateReasoning(normalized, risk);

    /**
     * STEP 5 - ANOMALY ENGINE
     */
    const anomalies = detectAnomalies(normalized);

    /**
     * STEP 6 - SNAPSHOT CREATION (REPLAY SAFE)
     */
    const snapshot = {
      timestamp: new Date().toISOString(),
      zones,
      normalized,
      risk,
      reasoning,
      anomalies,
    };

    STATE_HISTORY.push(snapshot);

    res.json({
      success: true,
      snapshot,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

/**
 * =========================
 * REPLAY ENGINE
 * =========================
 */
app.get("/api/replay", (req, res) => {
  res.json(replayState(STATE_HISTORY));
});

/**
 * =========================
 * SAFE 404 HANDLER (IMPORTANT FIX)
 * =========================
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    hint: "Use / or /api/intelligence-run",
  });
});

/**
 * =========================
 * START SERVER
 * =========================
 */
app.listen(PORT, () => {
  console.log("================================");
  console.log("🚀 UCCIS SERVER RUNNING");
  console.log(`📡 http://localhost:${PORT}`);
  console.log("================================");
});