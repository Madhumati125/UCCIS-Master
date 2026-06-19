export const summaryCards = [
  {
    id: 1,
    title: "Signals",
    value: 24
  },
  {
    id: 2,
    title: "Incidents",
    value: 18
  },
  {
    id: 3,
    title: "Escalations",
    value: 6
  },
  {
    id: 4,
    title: "Replay",
    value: 12
  },
  {
    id: 5,
    title: "Runtime Health",
    value: "98%"
  }
];

export const signals = [
  {
    id: "SIG-1001",
    traceId: "TRACE-1001",
    domain: "Flood",
    status: "Active"
  },
  {
    id: "SIG-1002",
    traceId: "TRACE-1002",
    domain: "Traffic",
    status: "Resolved"
  }
];

export const incidents = [
  {
    id: "INC-1001",
    traceId: "TRACE-1001",
    severity: "Critical",
    status: "Open"
  }
];

export const timeline = [
  {
    traceId: "TRACE-1001",
    signal: "SIG-1001",
    telemetry: "TEL-1001",
    incident: "INC-1001",
    escalation: "ESC-1001",
    replay: "REP-1001"
  }
];

export const domains = [
  "Flood",
  "Traffic",
  "Medical",
  "Power",
  "Cyber",
  "Water"
];