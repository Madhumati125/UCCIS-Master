CREATE DATABASE IF NOT EXISTS uccis;
USE uccis;

CREATE TABLE signals (
    id INT PRIMARY KEY AUTO_INCREMENT,
    trace_id VARCHAR(100),
    signal_type VARCHAR(100),
    source_system VARCHAR(255),
    location VARCHAR(255),
    severity VARCHAR(50),
    confidence INT,
    payload JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE telemetry_events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    signal_id INT,
    telemetry_type VARCHAR(100),
    telemetry_data JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(signal_id)
    REFERENCES signals(id)
);

CREATE TABLE incidents (
    id INT PRIMARY KEY AUTO_INCREMENT,
    signal_id INT,
    incident_type VARCHAR(100),
    status VARCHAR(50),
    priority VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(signal_id)
    REFERENCES signals(id)
);

CREATE TABLE escalations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    incident_id INT,
    escalation_level VARCHAR(100),
    assigned_team VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(incident_id)
    REFERENCES incidents(id)
);

CREATE TABLE decisions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    incident_id INT,
    decision_text TEXT,
    decision_status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(incident_id)
    REFERENCES incidents(id)
);

CREATE TABLE replay_events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    incident_id INT,
    replay_data JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(incident_id)
    REFERENCES incidents(id)
);

CREATE TABLE runtime_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    trace_id VARCHAR(100),
    stage VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);