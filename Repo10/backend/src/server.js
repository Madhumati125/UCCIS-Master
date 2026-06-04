const express = require("express");
const cors = require("cors");

const app = express();

/*
========================================
MIDDLEWARE
========================================
*/

app.use(cors());

app.use(express.json());

/*
========================================
ROOT ROUTE
========================================
*/

app.get("/", (req, res) => {
  res.send("UCCIS Backend Running Successfully");
});

/*
========================================
ESCALATION API
========================================
*/

app.get("/api/escalation", (req, res) => {
  res.json({
    success: true,

    timestamp: new Date(),

    data: {
      simulation_completed: true,

      escalation_level: "CRITICAL",

      incidents: 148,

      flood_alerts: 28,

      traffic_violations: 52,

      water_shortages: 14,

      governance_confidence_score: 92,

      active_zones: [
        "South Mumbai",
        "Andheri",
        "Thane West",
        "Kalwa-Mumbra",
      ],

      governance_feed: [
        "Flood escalation triggered in South Mumbai",
        "Traffic propagation detected near Andheri",
        "Emergency execution approved",
        "Water crisis intelligence activated",
        "Multi-zone stabilization initiated",
      ],
    },
  });
});

/*
========================================
FIELD EXECUTION API
========================================
*/

app.get("/api/execution", (req, res) => {
  res.json({
    success: true,

    timestamp: new Date(),

    data: {
      field_units_active: 28,

      emergency_vehicles: 14,

      response_teams: 9,

      operational_status: "ACTIVE",

      execution_feed: [
        "Rapid response teams deployed",
        "Traffic rerouting initiated",
        "Flood drainage systems activated",
        "Emergency medical units dispatched",
      ],
    },
  });
});

/*
========================================
REPLAY API
========================================
*/

app.get("/api/replay", (req, res) => {
  res.json({
    success: true,

    timestamp: new Date(),

    data: {
      replay_available: true,

      timeline_events: 52,

      completed_operations: 18,

      replay_feed: [
        "Flood escalation replay generated",
        "Traffic propagation replay available",
        "Execution timeline reconstructed",
        "Governance audit sequence completed",
      ],
    },
  });
});

/*
========================================
SIMULATION API
========================================
*/

app.get("/api/simulation", (req, res) => {
  res.json({
    success: true,

    timestamp: new Date(),

    data: {
      simulation_running: true,

      current_phase: "Governance Stabilization",

      active_incidents: 34,

      simulation_feed: [
        "Signal intelligence activated",
        "Ministerial escalation approved",
        "Field execution teams dispatched",
        "Citizen complaint surge detected",
        "Emergency response stabilized",
      ],
    },
  });
});

/*
========================================
ANALYTICS API
========================================
*/

app.get("/api/analytics", (req, res) => {
  res.json({
    success: true,

    timestamp: new Date(),

    analytics: {
      daily_incidents: [12, 18, 10, 25, 17, 30, 20],

      zone_performance: [
        {
          zone: "South Mumbai",
          score: 88,
        },

        {
          zone: "Andheri",
          score: 76,
        },

        {
          zone: "Thane West",
          score: 92,
        },

        {
          zone: "Kalwa-Mumbra",
          score: 69,
        },
      ],

      severity_distribution: {
        critical: 10,
        high: 20,
        medium: 40,
        low: 30,
      },
    },
  });
});

/*
========================================
SERVER START
========================================
*/

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});