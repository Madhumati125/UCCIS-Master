const zones = require("../data/zones");

const {
  movingAverage,
  getTrend,
  calculateRisk,
  getPrediction,
  getDecisionType,
  isDecisionReady
} = require("../utils/calculations");

const { saveSnapshot } = require("./snapshotService");

const { validateZone, validateZoneArray } = require("../utils/schemaValidator");

const processZones = (trace_id, store = true) => {
  const result = zones.map((zone) => {
    const trafficAvg = movingAverage(zone.traffic);
    const violationAvg = movingAverage(zone.violations);

    const riskScore = calculateRisk(trafficAvg, violationAvg);

    return {
      zone_id: zone.zone_id,
      trace_id,

      traffic_trend: getTrend(zone.traffic),
      moving_average: trafficAvg,
      risk_score: riskScore,
      prediction: getPrediction(zone.traffic),

      decision_ready: isDecisionReady(riskScore),
      decision_type: getDecisionType(riskScore)
    };
  });

  // ❌ CONTRACT VALIDATION BEFORE RETURN
  if (!validateZoneArray(result)) {
    return {
      trace_id,
      status: "error",
      error_code: "INVALID_SCHEMA"
    };
  }

  if (store) {
    const snapshotResult = saveSnapshot(result, trace_id);

    if (snapshotResult?.status === "error") {
      return {
        trace_id,
        status: "error",
        error_code: "INVALID_SCHEMA"
      };
    }
  }

  return result;
};

const processSingleZone = (zoneId, trace_id) => {
  const allZones = processZones(trace_id, false);

  if (allZones?.status === "error") {
    return allZones;
  }

  const single = allZones.find((z) => z.zone_id === zoneId);

  // ❌ VALIDATE SINGLE OUTPUT
  if (!validateZone(single)) {
    return {
      trace_id,
      status: "error",
      error_code: "INVALID_SCHEMA"
    };
  }

  return single;
};

module.exports = {
  processZones,
  processSingleZone
};