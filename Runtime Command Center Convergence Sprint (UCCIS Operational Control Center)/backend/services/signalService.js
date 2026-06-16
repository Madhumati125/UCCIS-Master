const db = require("../config/db");

const generateTraceId = () => {
  return `TRACE-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

exports.createSignal = async (payload) => {
  const traceId = generateTraceId();

  const signalData = {
    traceId,
    signalType: payload.signalType || "UNKNOWN",
    sourceSystem: payload.sourceSystem || "SYSTEM",
    severity: payload.severity || "LOW",
    status: "RECEIVED",
    description: payload.description || ""
  };

  await db.promise().query(
    `
    INSERT INTO signals
    (
      trace_id,
      signal_type,
      source_system,
      severity,
      status,
      description
    )
    VALUES (?,?,?,?,?,?)
    `,
    [
      signalData.traceId,
      signalData.signalType,
      signalData.sourceSystem,
      signalData.severity,
      signalData.status,
      signalData.description
    ]
  );

  return signalData;
};

exports.getSignals = async () => {
  const [rows] = await db.promise().query(`
    SELECT *
    FROM signals
    ORDER BY created_at DESC
  `);

  return rows;
};

exports.getSignalByTrace = async (traceId) => {
  const [rows] = await db.promise().query(
    `
    SELECT *
    FROM signals
    WHERE trace_id=?
    `,
    [traceId]
  );

  return rows[0];
};

exports.updateSignalStatus = async (
  traceId,
  status
) => {
  await db.promise().query(
    `
    UPDATE signals
    SET status=?
    WHERE trace_id=?
    `,
    [status, traceId]
  );
};