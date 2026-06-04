// =========================================================
// REPLAY TIMELINE BUILDER
// =========================================================

function buildTimeline(payload) {

  const timeline = [];

  timeline.push({
    stage: "INCIDENT CREATED",
    timestamp: payload.createdAt
  });

  payload.acknowledgements.forEach((ack) => {

    timeline.push({

      stage:
        ack.actor + " " + ack.status,

      timestamp:
        ack.time || "PENDING"

    });

  });

  return timeline;
}

module.exports = {
  buildTimeline
};