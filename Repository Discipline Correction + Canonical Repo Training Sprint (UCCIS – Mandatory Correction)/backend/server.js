const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Models
const Telemetry = require("./models/Telemetry");
const RuntimeLog = require("./models/RuntimeLog");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ----------------------
// BASIC TEST ROUTE
// ----------------------
app.get("/", (req, res) => {
  res.send("UCCIS Backend Running 🚀");
});

// ----------------------
// 🔥 TELEMETRY API
// ----------------------
app.get("/api/telemetry", async (req, res) => {
  const data = await Telemetry.find().sort({ timestamp: -1 });
  res.json(data);
});

app.post("/api/telemetry", async (req, res) => {
  const data = await Telemetry.create(req.body);
  res.json(data);
});

// ----------------------
// 🔥 RUNTIME API
// ----------------------
app.get("/api/runtime", async (req, res) => {
  const logs = await RuntimeLog.find().sort({ timestamp: -1 });
  res.json(logs);
});

app.post("/api/runtime", async (req, res) => {
  const log = await RuntimeLog.create(req.body);
  res.json(log);
});

// ----------------------
// 🔥 SEED FUNCTION
// ----------------------
const seedDatabase = async () => {
  const tCount = await Telemetry.countDocuments();
  const rCount = await RuntimeLog.countDocuments();

  if (tCount === 0) {
    await Telemetry.insertMany([
      { signalId: "T1", type: "CPU", value: 70, status: "OK" },
      { signalId: "T2", type: "MEM", value: 55, status: "OK" },
      { signalId: "T3", type: "DISK", value: 40, status: "OK" }
    ]);
    console.log("✅ Telemetry seed inserted");
  }

  if (rCount === 0) {
    await RuntimeLog.insertMany([
      { module: "backend", message: "System initialized", level: "INFO" },
      { module: "telemetry", message: "Stream started", level: "INFO" }
    ]);
    console.log("✅ Runtime seed inserted");
  }
};

// ----------------------
// START SERVER
// ----------------------
const start = async () => {
  try {
    await connectDB();
    console.log("✅ MongoDB Connected");

    await seedDatabase();

    app.listen(process.env.PORT || 5000, () => {
      console.log("🚀 Server running on port 5000");
    });
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
};

start();