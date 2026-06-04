const Telemetry = require("../models/Telemetry");
const RuntimeLog = require("../models/RuntimeLog");

const seedDatabase = async () => {
  const tCount = await Telemetry.countDocuments();
  const rCount = await RuntimeLog.countDocuments();

  if (tCount === 0) {
    await Telemetry.insertMany([
      { signalId: "T1", type: "CPU", value: 65, status: "OK" },
      { signalId: "T2", type: "MEM", value: 78, status: "WARN" },
      { signalId: "T3", type: "DISK", value: 40, status: "OK" }
    ]);

    console.log("Telemetry seed inserted 🚀");
  }

  if (rCount === 0) {
    await RuntimeLog.insertMany([
      { module: "backend", message: "System boot complete", level: "INFO" },
      { module: "telemetry", message: "Stream active", level: "INFO" }
    ]);

    console.log("Runtime seed inserted 🚀");
  }
};

module.exports = seedDatabase;