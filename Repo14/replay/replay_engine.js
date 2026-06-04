// =========================================================
// UCCIS
// PHASE 5 — REPLAY ENGINE
// =========================================================

/*
Replay must remain:
- reconstructive
- operator-safe
- human-readable

NOT:
- directive
- autonomous
- decision-making
*/

const timelineBuilder = require("./replay_timeline_builder");

const lifecycleVisualizer = require("./lifecycle_visualizer");

const acknowledgementTracker = require("./acknowledgement_tracker");

const resolutionReconstructor = require("./resolution_reconstructor");

const divergenceDetector = require("./divergence_detector");

// =========================================================
// SAMPLE INCIDENT PAYLOAD
// =========================================================

const incidentPayload = {

  incidentId: "INC-8841",

  district: "Nashik",

  severity: "HIGH",

  createdAt: "08:14",

  acknowledgements: [
    {
      actor: "Collector",
      status: "ACKNOWLEDGED",
      time: "08:16"
    },
    {
      actor: "District Operations",
      status: "ACKNOWLEDGED",
      time: "08:18"
    },
    {
      actor: "Field Officer",
      status: "PENDING",
      time: null
    }
  ],

  lifecycle: [
    "Incident Triggered",
    "District Escalation",
    "Field Deployment",
    "Resolution Pending"
  ],

  resolution: {
    resolved: false,
    summary: "Awaiting field confirmation"
  }

};

// =========================================================
// BUILD REPLAY OUTPUT
// =========================================================

const replayOutput = {

  timeline: timelineBuilder.buildTimeline(
    incidentPayload
  ),

  lifecycle: lifecycleVisualizer.visualize(
    incidentPayload
  ),

  acknowledgements:
    acknowledgementTracker.track(
      incidentPayload
    ),

  resolution:
    resolutionReconstructor.reconstruct(
      incidentPayload
    ),

  divergence:
    divergenceDetector.detect(
      incidentPayload
    )

};

// =========================================================
// FINAL REPLAY OUTPUT
// =========================================================

console.log("\n==============================");
console.log("UCCIS REPLAY RECONSTRUCTION");
console.log("==============================\n");

console.log(
  JSON.stringify(
    replayOutput,
    null,
    2
  )
);