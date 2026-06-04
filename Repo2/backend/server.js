const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 5 zones
const zones = [
  { id: "zone_1", name: "Zone 1", traffic_density: 30, violation_count: 2, congestion_level: "LOW", trend: "stable" },
  { id: "zone_2", name: "Zone 2", traffic_density: 55, violation_count: 5, congestion_level: "MEDIUM", trend: "stable" },
  { id: "zone_3", name: "Zone 3", traffic_density: 68, violation_count: 9, congestion_level: "MEDIUM", trend: "increasing" },
  { id: "zone_4", name: "Zone 4", traffic_density: 82, violation_count: 15, congestion_level: "HIGH", trend: "increasing" },
  { id: "zone_5", name: "Zone 5", traffic_density: 75, violation_count: 12, congestion_level: "HIGH", trend: "increasing" }
];

// 🔥 status + alerts
zones.forEach(zone => {
  if (zone.traffic_density > 70 || zone.violation_count > 10) zone.status = "RED";
  else if (zone.traffic_density > 50) zone.status = "YELLOW";
  else zone.status = "GREEN";

  zone.alerts = [];
  if (zone.traffic_density > 70) zone.alerts.push("HIGH_TRAFFIC");
  if (zone.violation_count > 10) zone.alerts.push("HIGH_VIOLATIONS");
  if (zone.congestion_level === "HIGH") zone.alerts.push("HIGH_CONGESTION");
});

app.get("/zones", (req, res) => res.json(zones));

app.post("/request/decision", (req, res) => {
  console.log("🔥 Request:", req.body);

  setTimeout(() => {
    const approved = Math.random() > 0.3;
    res.json({
      status: approved ? "APPROVED" : "REJECTED",
      trace_id: req.body.trace_id
    });
  }, 1000);
});

app.listen(5000, () => {
  console.log("✅ Server running on http://127.0.0.1:5000");
});