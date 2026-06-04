// =========================================================
// RESOLUTION RECONSTRUCTOR
// =========================================================

function reconstruct(payload) {

  if (payload.resolution.resolved) {

    return {

      status: "RESOLVED",

      summary:
        payload.resolution.summary

    };

  }

  return {

    status: "PENDING",

    summary:
      payload.resolution.summary

  };

}

module.exports = {
  reconstruct
};