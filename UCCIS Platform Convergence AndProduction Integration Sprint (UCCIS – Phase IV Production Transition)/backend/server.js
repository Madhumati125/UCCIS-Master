const express = require("express");
const http = require("http");
const cors = require("cors");
const WebSocket = require("ws");

const app = express();

/* ================================
   MIDDLEWARE
================================ */
app.use(cors());
app.use(express.json());

/* ================================
   SAMPLE REST API ROUTES
================================ */

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "UCCIS Backend",
    timestamp: new Date().toISOString(),
  });
});

/* ---- Incidents API (mock) ---- */
app.get("/api/incidents", (req, res) => {
  res.json([
    { id: "INC-1001", status: "Open", priority: "High" },
    { id: "INC-1002", status: "Closed", priority: "Critical" },
  ]);
});

/* ---- Escalations API (mock) ---- */
app.get("/api/escalations", (req, res) => {
  res.json([
    { id: "ESC-01", level: "L1", status: "Active" },
    { id: "ESC-02", level: "L2", status: "Resolved" },
  ]);
});

/* ================================
   TELEMETRY GENERATOR
================================ */
function generateTelemetry() {
  return {
    timestamp: Date.now(),
    cpu: +(30 + Math.random() * 50).toFixed(2),
    memory: +(40 + Math.random() * 40).toFixed(2),
    latency: +(10 + Math.random() * 120).toFixed(2),
    rps: Math.floor(100 + Math.random() * 900),
    errors: Math.floor(Math.random() * 5),
  };
}

/* ================================
   WEBSOCKET SERVER
================================ */

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("⚡ Client connected to telemetry");

  const interval = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(generateTelemetry()));
    }
  }, 1000);

  ws.on("close", () => {
    clearInterval(interval);
    console.log("❌ Client disconnected");
  });
});

/* ================================
   SAFE 404 HANDLER (FIX FOR YOUR ERROR)
================================ */

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl,
  });
});

/* ================================
   START SERVER
================================ */

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 UCCIS Backend running on http://localhost:${PORT}`);
  console.log(`⚡ WebSocket running on ws://localhost:${PORT}`);
});