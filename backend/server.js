const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();   // ✅ MUST BE HERE

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// GET ZONE STATE
app.get("/zone/state", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./data/zones.json"));
    res.json(data);
});

// GET ALERTS
app.get("/alerts", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./data/alerts.json"));
    res.json(data);
});

// 🔥 ACTION TRIGGER (FIXED)
app.post("/action/trigger", (req, res) => {
    let zones = JSON.parse(fs.readFileSync("./data/zones.json"));
    let alerts = JSON.parse(fs.readFileSync("./data/alerts.json"));

    let { zoneId, action } = req.body;

    zoneId = Number(zoneId); // fix type

    let severity = "LOW";

    zones = zones.map(z => {
        if (z.id === zoneId) {

            // 🔥 ACTION LOGIC
            if (action === "deploy_waste_collection") {
                z.metrics.load -= 20;
            }

            if (action === "reroute_water") {
                z.metrics.load -= 15;
            }

            if (action === "send_field_team") {
                z.metrics.load -= 25;
            }

            if (z.metrics.load < 0) z.metrics.load = 0;

            // 🔥 STATUS UPDATE
            if (z.metrics.load >= 70) {
                z.status = "RED";
                severity = "CRITICAL";
            } else if (z.metrics.load >= 40) {
                z.status = "YELLOW";
                severity = "HIGH";
            } else {
                z.status = "GREEN";
                severity = "MEDIUM";
            }
        }
        return z;
    });

    // 🔥 ADD ALERT
    alerts.push({
        id: Date.now(),
        type: action,
        severity: severity,
        zoneId: zoneId,
        timestamp: new Date().toLocaleString()
    });

    fs.writeFileSync("./data/zones.json", JSON.stringify(zones, null, 2));
    fs.writeFileSync("./data/alerts.json", JSON.stringify(alerts, null, 2));

    res.json({ message: "Action executed", zones });
});

// START SERVER
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});