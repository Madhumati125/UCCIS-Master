INSERT INTO signals
(
trace_id,
signal_type,
source_system,
location,
severity,
confidence,
payload
)
VALUES
(
'TRC-FLOOD-001',
'Flood Alert',
'River Sensor',
'Pune',
'HIGH',
95,
JSON_OBJECT(
'water_level','8.5m'
)
);

INSERT INTO signals
(
trace_id,
signal_type,
source_system,
location,
severity,
confidence,
payload
)
VALUES
(
'TRC-TRAFFIC-001',
'Traffic Incident',
'Traffic Camera',
'Shivaji Nagar',
'MEDIUM',
89,
JSON_OBJECT(
'junction','Signal Failure'
)
);

INSERT INTO signals
(
trace_id,
signal_type,
source_system,
location,
severity,
confidence,
payload
)
VALUES
(
'TRC-CYBER-001',
'Cyber Incident',
'SOC',
'Data Center',
'CRITICAL',
98,
JSON_OBJECT(
'attack','DDoS'
)
);