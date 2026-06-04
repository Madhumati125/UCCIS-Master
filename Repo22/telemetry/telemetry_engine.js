/*
=========================================================
UCCIS TELEMETRY ENGINE
Principal Secretary Demonstration Runtime
=========================================================
*/

const fs = require("fs");

const path = require("path");

/*
=========================================================
RUNTIME LOG PATH
=========================================================
*/

const runtimeLogPath = path.join(
  __dirname,
  "../runtime_logs/runtime.log"
);

/*
=========================================================
WRITE LOG FUNCTION
=========================================================
*/

const writeLog = (message) => {
  const timestamp =
    new Date().toISOString();

  const finalLog =
    `[${timestamp}] ${message}\n`;

  fs.appendFileSync(
    runtimeLogPath,
    finalLog
  );
};

/*
=========================================================
DEPARTMENTS
=========================================================
*/

const departments = [
  "Water Department",
  "Traffic Control",
  "Waste Management",
  "Emergency Response",
  "Health Operations",
  "Power Grid",
  "Infrastructure",
];

/*
=========================================================
DISTRICTS
=========================================================
*/

const districts = [
  "Pune Central",
  "Shivajinagar",
  "Baner",
  "Hinjewadi",
  "Kothrud",
  "Wakad",
  "Hadapsar",
  "Aundh",
  "Pimpri",
  "Chinchwad",
  "Yerwada",
  "Kharadi",
  "Viman Nagar",
  "Swargate",
  "Nigdi",
];

/*
=========================================================
SEVERITY LEVELS
=========================================================
*/

const severities = [
  "LOW",
  "MEDIUM",
  "HIGH",
  "CRITICAL",
];

/*
=========================================================
STATUS TYPES
=========================================================
*/

const statuses = [
  "ACTIVE",
  "ACTIVE",
  "ACTIVE",
  "DEGRADED",
];

/*
=========================================================
GENERATE RANDOM ITEM
=========================================================
*/

const randomItem = (array) => {
  return array[
    Math.floor(
      Math.random() *
        array.length
    )
  ];
};

/*
=========================================================
GENERATE TELEMETRY
=========================================================
*/

const generateTelemetry =
  () => {
    const telemetry = [];

    for (
      let i = 1;
      i <= 25;
      i++
    ) {
      const telemetryObject = {
        telemetry_id:
          `TEL-${1000 + i}`,

        signal_id:
          `SIG-${2000 + i}`,

        district:
          randomItem(
            districts
          ),

        department:
          randomItem(
            departments
          ),

        status:
          randomItem(
            statuses
          ),

        health_score:
          Math.floor(
            Math.random() * 40
          ) + 60,

        latency:
          Math.floor(
            Math.random() * 120
          ) + 20,

        severity:
          randomItem(
            severities
          ),

        telemetry_load:
          Math.floor(
            Math.random() * 100
          ) + "%",

        replay_reference:
          `REP-${3000 + i}`,

        escalation_reference:
          `ESC-${4000 + i}`,

        runtime_state:
          "RUNNING",

        timestamp:
          new Date().toISOString(),
      };

      telemetry.push(
        telemetryObject
      );
    }

    writeLog(
      "Telemetry runtime generated successfully"
    );

    return telemetry;
  };

/*
=========================================================
FLOOD SIMULATION
=========================================================
*/

const generateFloodScenario =
  () => {
    writeLog(
      "Flood simulation triggered"
    );

    return {
      scenario:
        "FLOOD ESCALATION",

      district:
        "Pune Central",

      water_level:
        "CRITICAL",

      telemetry_state:
        "DEGRADED",

      escalation:
        "ACTIVE",

      replay:
        "RECORDED",

      response_team:
        "Emergency Response Unit",

      status:
        "UNDER MONITORING",

      timestamp:
        new Date().toISOString(),
    };
  };

/*
=========================================================
TRAFFIC SIMULATION
=========================================================
*/

const generateTrafficScenario =
  () => {
    writeLog(
      "Traffic congestion simulation triggered"
    );

    return {
      scenario:
        "TRAFFIC CONGESTION",

      district:
        "Shivajinagar",

      traffic_density:
        "92%",

      telemetry_state:
        "ACTIVE",

      escalation:
        "MEDIUM",

      replay:
        "RECORDED",

      response_team:
        "Traffic Control Unit",

      status:
        "SIGNAL OPTIMIZATION ACTIVE",

      timestamp:
        new Date().toISOString(),
    };
  };

/*
=========================================================
WASTE SIMULATION
=========================================================
*/

const generateWasteScenario =
  () => {
    writeLog(
      "Waste overflow simulation triggered"
    );

    return {
      scenario:
        "WASTE OVERFLOW",

      district:
        "Hadapsar",

      overflow_level:
        "HIGH",

      telemetry_state:
        "ACTIVE",

      escalation:
        "HIGH",

      replay:
        "RECORDED",

      response_team:
        "Waste Management Team",

      status:
        "DISPATCH ACTIVE",

      timestamp:
        new Date().toISOString(),
    };
  };

/*
=========================================================
RUNTIME STATE
=========================================================
*/

const generateRuntime =
  () => {
    return {
      runtime_state:
        "RUNNING",

      cpu_load:
        Math.floor(
          Math.random() * 30
        ) + 40,

      memory_usage:
        Math.floor(
          Math.random() * 30
        ) + 50,

      telemetry_entities:
        284,

      escalation_entities:
        31,

      replay_entities:
        74,

      operational_health:
        "STABLE",

      database:
        "CONNECTED",

      ttg_runtime:
        "ACTIVE",

      location:
        "Pune Operations Zone",

      timestamp:
        new Date().toISOString(),
    };
  };

/*
=========================================================
EXPORTS
=========================================================
*/

module.exports = {
  generateTelemetry,

  generateFloodScenario,

  generateTrafficScenario,

  generateWasteScenario,

  generateRuntime,
};