const db = require("../config/db");

exports.createReplay = async (
  traceId
) => {

  const [result] = await db.promise().query(
    `
    INSERT INTO replay_events
    (
      trace_id,
      replay_status
    )
    VALUES (?,?)
    `,
    [
      traceId,
      "READY"
    ]
  );

  return {
    replayId: result.insertId,
    traceId
  };
};

exports.getReplayEvents = async () => {

  const [rows] = await db.promise().query(`
    SELECT *
    FROM replay_events
    ORDER BY created_at DESC
  `);

  return rows;
};

exports.runReplay = async (
  traceId
) => {

  await db.promise().query(
    `
    UPDATE replay_events
    SET replay_status='EXECUTED'
    WHERE trace_id=?
    `,
    [traceId]
  );

  return {
    success: true,
    traceId
  };
};

exports.getReplayByTrace = async (
  traceId
) => {

  const [rows] = await db.promise().query(
    `
    SELECT *
    FROM replay_events
    WHERE trace_id=?
    `,
    [traceId]
  );

  return rows;
};