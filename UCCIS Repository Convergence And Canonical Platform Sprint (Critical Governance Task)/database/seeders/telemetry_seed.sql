INSERT INTO telemetry
(
trace_id,
metric_name,
metric_value,
unit,
status
)
VALUES
(
'TRACE-1001',
'CPU Usage',
85,
'%',
'WARNING'
),
(
'TRACE-1002',
'Memory Usage',
72,
'%',
'HEALTHY'
),
(
'TRACE-1003',
'Network Latency',
120,
'ms',
'CRITICAL'
);