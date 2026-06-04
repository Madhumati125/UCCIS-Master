// =========================================================
// REPLAY DIVERGENCE DETECTOR
// =========================================================

function detect(payload) {

  const pendingAcknowledgements =
    payload.acknowledgements.filter(
      (ack) => ack.status === "PENDING"
    );

  return {

    divergenceDetected:
      pendingAcknowledgements.length > 0,

    pendingCount:
      pendingAcknowledgements.length,

    summary:
      pendingAcknowledgements.length > 0
        ? "Replay divergence detected"
        : "Replay lifecycle stable"

  };

}

module.exports = {
  detect
};