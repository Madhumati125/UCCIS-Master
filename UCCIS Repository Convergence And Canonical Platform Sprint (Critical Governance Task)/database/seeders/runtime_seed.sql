INSERT INTO runtime_logs
(
trace_id,
layer_name,
execution_status,
message,
execution_time
)
VALUES
(
'TRACE-1001',
'Signal',
'SUCCESS',
'Signal processed',
120
),
(
'TRACE-1001',
'Telemetry',
'SUCCESS',
'Telemetry collected',
90
),
(
'TRACE-1001',
'Incident',
'SUCCESS',
'Incident generated',
150
),
(
'TRACE-1001',
'Escalation',
'SUCCESS',
'Escalation triggered',
70
),
(
'TRACE-1001',
'Replay',
'SUCCESS',
'Replay completed',
200
),
(
'TRACE-1001',
'Evidence',
'SUCCESS',
'Evidence stored',
110
);