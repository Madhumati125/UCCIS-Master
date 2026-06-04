/*
=========================================================
UCCIS REPLAY ENGINE
Principal Secretary Demonstration Runtime
=========================================================
*/

const fs = require("fs");

const path = require("path");

/*
=========================================================
LOG FILE PATH
=========================================================
*/

const replayLogPath = path.join(
  __dirname,
  "../runtime_logs/replay.log"
);

/*
=========================================================
WRITE REPLAY LOG
=========================================================
*/

const writeReplayLog = (
  message
) => {
  const timestamp =
    new Date().toISOString();

  const finalLog =
    `[${timestamp}] ${message}\n`;

  fs.appendFileSync(
    replayLogPath,
    finalLog
  );
};

/*
=========================================================
REPLAY STORAGE
=========================================================
*/

let replayStore = [];

/*
=========================================================
GENERATE RANDOM STATUS
=========================================================
*/

const replayStatuses = [
  "RECORDED",
  "RECONSTRUCTED",
  "VERIFIED",
  "ARCHIVED",
];

/*
=========================================================
GENERATE RANDOM EVENT
=========================================================
*/

const replayEvents = [
  "Flood Escalation",
  "Traffic Congestion",
  "Waste Overflow",
  "Water Pressure Failure",
  "Telemetry Delay",
  "Runtime Degradation",
  "Signal Failure",
  "Operator Escalation",
];

/*
=========================================================
GENERATE RANDOM DISTRICT
=========================================================
*/

const districts = [
  "Pune Central",
  "Shivajinagar",
  "Baner",
  "Hinjewadi",
  "Wakad",
  "Hadapsar",
  "Kothrud",
  "Pimpri",
  "Chinchwad",
  "Yerwada",
  "Aundh",
  "Kharadi",
];

/*
=========================================================
RANDOM ITEM
=========================================================
*/

const randomItem = (
  array
) => {
  return array[
    Math.floor(
      Math.random() *
        array.length
    )
  ];
};

/*
=========================================================
GENERATE INITIAL REPLAY EVENTS
=========================================================
*/

const generateReplayEvents =
  () => {
    replayStore = [];

    for (
      let i = 1;
      i <= 15;
      i++
    ) {
      const replayObject = {
        replay_id:
          `REP-${5000 + i}`,

        signal_id:
          `SIG-${1000 + i}`,

        telemetry_id:
          `TEL-${2000 + i}`,

        escalation_id:
          `ESC-${3000 + i}`,

        runtime_ref:
          `RUN-${4000 + i}`,

        district:
          randomItem(
            districts
          ),

        event:
          randomItem(
            replayEvents
          ),

        status:
          randomItem(
            replayStatuses
          ),

        reconstruction_ref:
          `REC-${6000 + i}`,

        operator:
          `Operator-${i}`,

        latency:
          Math.floor(
            Math.random() * 80
          ) + 20,

        health_score:
          Math.floor(
            Math.random() * 40
          ) + 60,

        timestamp:
          new Date().toISOString(),
      };

      replayStore.push(
        replayObject
      );
    }

    writeReplayLog(
      "Replay engine initialized successfully"
    );

    return replayStore;
  };

/*
=========================================================
ADD NEW REPLAY EVENT
=========================================================
*/

const addReplayEvent = (
  eventName,
  district,
  severity
) => {
  const replayObject = {
    replay_id:
      `REP-${Date.now()}`,

    signal_id:
      `SIG-${Math.floor(
        Math.random() * 9000
      )}`,

    telemetry_id:
      `TEL-${Math.floor(
        Math.random() * 9000
      )}`,

    escalation_id:
      `ESC-${Math.floor(
        Math.random() * 9000
      )}`,

    runtime_ref:
      `RUN-${Math.floor(
        Math.random() * 9000
      )}`,

    district:
      district,

    event:
      eventName,

    severity:
      severity,

    status:
      "RECORDED",

    reconstruction_ref:
      `REC-${Math.floor(
        Math.random() * 9000
      )}`,

    operator:
      "TTG Runtime Engine",

    latency:
      Math.floor(
        Math.random() * 60
      ) + 10,

    health_score:
      Math.floor(
        Math.random() * 30
      ) + 70,

    timestamp:
      new Date().toISOString(),
  };

  replayStore.unshift(
    replayObject
  );

  writeReplayLog(
    `${eventName} replay recorded for ${district}`
  );

  return replayObject;
};

/*
=========================================================
FLOOD REPLAY EVENT
=========================================================
*/

const generateFloodReplay =
  () => {
    return addReplayEvent(
      "Flood Escalation",
      "Pune Central",
      "CRITICAL"
    );
  };

/*
=========================================================
TRAFFIC REPLAY EVENT
=========================================================
*/

const generateTrafficReplay =
  () => {
    return addReplayEvent(
      "Traffic Congestion",
      "Shivajinagar",
      "HIGH"
    );
  };

/*
=========================================================
WASTE REPLAY EVENT
=========================================================
*/

const generateWasteReplay =
  () => {
    return addReplayEvent(
      "Waste Overflow",
      "Hadapsar",
      "HIGH"
    );
  };

/*
=========================================================
GET REPLAY STORE
=========================================================
*/

const getReplayStore =
  () => {
    return replayStore;
  };

/*
=========================================================
CLEAR REPLAY STORE
=========================================================
*/

const clearReplayStore =
  () => {
    replayStore = [];

    writeReplayLog(
      "Replay store cleared"
    );

    return {
      status:
        "Replay Store Cleared",
    };
  };

/*
=========================================================
REPLAY ENGINE HEALTH
=========================================================
*/

const replayEngineHealth =
  () => {
    return {
      replay_engine:
        "ACTIVE",

      replay_events:
        replayStore.length,

      reconstruction:
        "RUNNING",

      integrity:
        "VERIFIED",

      runtime_state:
        "STABLE",

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
  generateReplayEvents,

  generateFloodReplay,

  generateTrafficReplay,

  generateWasteReplay,

  getReplayStore,

  clearReplayStore,

  replayEngineHealth,
};