// =========================================================
// LIFECYCLE VISUALIZER
// =========================================================

function visualize(payload) {

  return payload.lifecycle.map(
    (stage, index) => {

      return {

        step: index + 1,

        label: stage,

        state:
          index === payload.lifecycle.length - 1
            ? "ACTIVE"
            : "COMPLETED"

      };

    }
  );
}

module.exports = {
  visualize
};