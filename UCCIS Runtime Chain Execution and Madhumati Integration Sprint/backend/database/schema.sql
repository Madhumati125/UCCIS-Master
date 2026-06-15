CREATE TABLE signals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    signal_id VARCHAR(100),
    trace_id VARCHAR(100),
    signal_type VARCHAR(100),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE telemetry (
    id INT AUTO_INCREMENT PRIMARY KEY,
    telemetry_id VARCHAR(100),
    trace_id VARCHAR(100),
    signal_id VARCHAR(100),
    payload JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE incidents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    incident_id VARCHAR(100),
    trace_id VARCHAR(100),
    telemetry_id VARCHAR(100),
    severity VARCHAR(50),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE escalations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    escalation_id VARCHAR(100),
    trace_id VARCHAR(100),
    incident_id VARCHAR(100),
    level VARCHAR(50),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE runtime_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trace_id VARCHAR(100),
    event_type VARCHAR(100),
    event_message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE replay_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trace_id VARCHAR(100),
    replay_data JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);