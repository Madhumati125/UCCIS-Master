const {
  processZones,
  processSingleZone
} = require("../services/intelligenceService");

const generateTraceId = () => "TRACE_" + Date.now();

// ❌ standardized error response
const sendError = (res, trace_id) => {
  return res.status(400).json({
    trace_id,
    status: "error",
    error_code: "INVALID_SCHEMA"
  });
};

// 🔥 GET ALL ZONES
const getZonesIntelligence = (req, res) => {
  const trace_id = generateTraceId();

  const result = processZones(trace_id);

  if (result?.status === "error") {
    return sendError(res, trace_id);
  }

  return res.json(result);
};

// 🔥 GET SINGLE ZONE
const getZoneIntelligence = (req, res) => {
  const trace_id = generateTraceId();

  const { zone_id } = req.query;

  const result = processSingleZone(zone_id, trace_id);

  if (result?.status === "error") {
    return sendError(res, trace_id);
  }

  return res.json(result);
};

module.exports = {
  getZonesIntelligence,
  getZoneIntelligence
};