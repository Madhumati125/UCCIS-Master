const db = require("../config/db");

exports.createIncident = async (
  traceId,
  signal
) => {

  const incident = {
    traceId,
    incidentType: signal.signal_type,
    severity: signal.severity,
    status: "OPEN"
  };

  const [result] = await db.promise().query(
    `
    INSERT INTO incidents
    (
      trace_id,
      incident_type,
      severity,
      status
    )
    VALUES (?,?,?,?)
    `,
    [
      incident.traceId,
      incident.incidentType,
      incident.severity,
      incident.status
    ]
  );

  return {
    incidentId: result.insertId,
    ...incident
  };
};

exports.getIncidents = async () => {

  const [rows] = await db.promise().query(`
    SELECT *
    FROM incidents
    ORDER BY created_at DESC
  `);

  return rows;
};

exports.resolveIncident = async (
  incidentId
) => {

  await db.promise().query(
    `
    UPDATE incidents
    SET status='RESOLVED'
    WHERE incident_id=?
    `,
    [incidentId]
  );
};