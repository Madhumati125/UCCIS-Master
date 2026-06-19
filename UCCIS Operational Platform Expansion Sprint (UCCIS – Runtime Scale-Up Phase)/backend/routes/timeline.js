const express = require("express");

const router = express.Router();

const runtimeData = require("../data/runtimeData");

router.get("/", (req, res) => {
  const timeline = runtimeData.signals.map((signal) => {
    const incident = runtimeData.incidents.find(
      (i) => i.traceId === signal.traceId
    );

    const escalation = runtimeData.escalations.find(
      (e) => e.incidentId === incident?.id
    );

    const replay = runtimeData.replays.find(
      (r) => r.traceId === signal.traceId
    );

    return {
      traceId: signal.traceId,
      signal,
      incident,
      escalation,
      replay,
    };
  });

  res.json(timeline);
});

module.exports = router;