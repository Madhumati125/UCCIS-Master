INSERT INTO signals
(
trace_id,
signal_name,
signal_type,
severity,
status,
source
)
VALUES
(
'TRACE-1001',
'Flood Alert',
'Weather',
'CRITICAL',
'ACTIVE',
'Sensor-A'
),
(
'TRACE-1002',
'Traffic Congestion',
'Traffic',
'HIGH',
'ACTIVE',
'Camera-B'
),
(
'TRACE-1003',
'Power Failure',
'Utility',
'MEDIUM',
'ACTIVE',
'Grid-C'
);