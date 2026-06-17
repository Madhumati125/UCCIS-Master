require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const eventRoutes = require("./routes/eventRoutes");
const traceRoutes = require("./routes/traceRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

const app = express();

/*
====================================================
MIDDLEWARE
====================================================
*/

app.use(
  cors({
    origin: "*",
    credentials: true
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

/*
====================================================
REQUEST LOGGER
====================================================
*/

app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`
  );
  next();
});

/*
====================================================
DATABASE CONNECTION
====================================================
*/

const connectDB = async () => {
  try {
    const mongoUri =
      process.env.MONGO_URI ||
      "mongodb://127.0.0.1:27017/uccis";

    await mongoose.connect(mongoUri);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error.message);
    process.exit(1);
  }
};

connectDB();

/*
====================================================
HEALTH CHECK
====================================================
*/

app.get("/", (req, res) => {
  res.json({
    platform: "UCCIS",
    status: "RUNNING",
    phase: "Runtime Scale-Up",
    timestamp: new Date()
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    database:
      mongoose.connection.readyState === 1
        ? "CONNECTED"
        : "DISCONNECTED",
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

/*
====================================================
API ROUTES
====================================================
*/

app.use("/api/events", eventRoutes);
app.use("/api/traces", traceRoutes);
app.use("/api/analytics", analyticsRoutes);

/*
====================================================
404 HANDLER
====================================================
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl
  });
});

/*
====================================================
GLOBAL ERROR HANDLER
====================================================
*/

app.use((err, req, res, next) => {
  console.error("SERVER ERROR");
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

/*
====================================================
START SERVER
====================================================
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("====================================");
  console.log("🚀 UCCIS Operational Platform");
  console.log(`🌐 Port: ${PORT}`);
  console.log(`🕒 Started: ${new Date().toISOString()}`);
  console.log("====================================");
});