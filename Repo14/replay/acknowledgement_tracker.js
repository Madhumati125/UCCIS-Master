// =========================================================
// ACKNOWLEDGEMENT TRACKER
// =========================================================

function track(payload) {

  return payload.acknowledgements.map((ack) => {

    return {

      actor: ack.actor,

      status: ack.status,

      timestamp:
        ack.time || "WAITING"

    };

  });

}

module.exports = {
  track
};