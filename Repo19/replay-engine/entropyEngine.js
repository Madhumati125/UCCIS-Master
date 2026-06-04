/* =========================================================
UCCIS ENTROPY ENGINE
========================================================= */

const entropyEngine = (risk) => {

  /* =====================================================
  VALIDATION
  ===================================================== */

  if (risk === undefined || risk === null) {

    return {
      success: false,
      message: "Risk value missing"
    };

  }

  /* =====================================================
  ENTROPY CALCULATION
  ===================================================== */

  const entropy =
    100 - risk;

  /* =====================================================
  STABILITY CLASSIFICATION
  ===================================================== */

  let stability = "Stable";

  if (risk > 60) {
    stability = "Elevated";
  }

  if (risk > 75) {
    stability = "Critical";
  }

  if (risk > 90) {
    stability = "Severe";
  }

  /* =====================================================
  ENTROPY TREND
  ===================================================== */

  let trend = "Maintained";

  if (entropy < 30) {
    trend = "Deteriorating";
  }

  if (entropy > 60) {
    trend = "Recovering";
  }

  /* =====================================================
  RETURN OBJECT
  ===================================================== */

  return {

    success: true,

    engine: "UCCIS Entropy Engine",

    risk,

    entropy,

    stability,

    trend,

    timestamp: new Date()

  };

};

module.exports = entropyEngine;