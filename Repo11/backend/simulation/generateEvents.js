const { v4: uuidv4 } = require("uuid");

const {
  appendEvent
} = require("../services/eventJournalService");

const {
  generateHash
} = require("../services/hashService");

for (let i = 1; i <= 20; i++) {
  const event = {
    event_id: uuidv4(),
    trace_id: "TRACE_MUMBAI_FLOOD",
    zone_id: "MUMBAI_ZONE_1",
    sequence: i,
    timestamp: new Date().toISOString(),
    event_type: "FLOOD_ALERT",
    payload: {
      severity: "HIGH",
      water_level: 80 + i
    }
  };

  event.hash = generateHash(event);

  appendEvent(event);
}

console.log("Simulation Events Generated");