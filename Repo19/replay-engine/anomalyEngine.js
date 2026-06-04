/* =========================================================
UCCIS ANOMALY ENGINE
========================================================= */

const anomalyEngine = (latency) => {

  /* =====================================================
  VALIDATION
  ===================================================== */

  if (!latency) {

    return {
      success: false,
      message: "Latency value missing"
    };

  }

  /* =====================================================
  BASE ANALYSIS
  ===================================================== */

  let anomaly = false;

  let level = "Stable";

  let operationalImpact =
    "No operational impact";

  /* =====================================================
  ANOMALY DETECTION
  ===================================================== */

  if (latency > 50) {

    anomaly = true;

    level = "Elevated";

    operationalImpact =
      "Minor telemetry instability";

  }

  if (latency > 70) {

    anomaly = true;

    level = "Critical";

    operationalImpact =
      "Replay continuity degradation";

  }

  if (latency > 90) {

    anomaly = true;

    level = "Severe";

    operationalImpact =
      "High operational synchronization risk";

  }

  /* =====================================================
  HEALTH SCORE
  ===================================================== */

  const healthScore =
    Math.max(
      0,
      100 - latency
    );

  /* =====================================================
  RETURN PAYLOAD
  ===================================================== */

  return {

    success: true,

    engine: "UCCIS Anomaly Engine",

    latency,

    anomaly,

    level,

    healthScore,

    operationalImpact,

    timestamp: new Date()

  };

};

module.exports = anomalyEngine;