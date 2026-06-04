const fs = require("fs");
const path = require("path");

function traceLogger(signal) {

  const logDir = path.join(__dirname);

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  const trace = {
    trace_id: signal.trace_id,
    source_type: signal.source_type,
    zone: signal.zone,
    timestamp: new Date()
  };

  fs.appendFileSync(
    path.join(logDir, "traces.log"),
    JSON.stringify(trace) + "\n"
  );

}

module.exports = traceLogger;