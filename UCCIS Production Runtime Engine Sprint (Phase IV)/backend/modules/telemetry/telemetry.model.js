const mongoose = require("mongoose");

const TelemetrySchema =
  new mongoose.Schema(
    {
      traceId: String,
      cpuUsage: Number,
      memoryUsage: Number,
      latency: Number,
      throughput: Number,
      status: String
    },
    {
      timestamps: true
    }
  );

module.exports =
  mongoose.model(
    "Telemetry",
    TelemetrySchema
  );