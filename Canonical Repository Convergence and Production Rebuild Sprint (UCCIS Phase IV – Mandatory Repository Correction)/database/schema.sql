CREATE DATABASE IF NOT EXISTS uccis_14;

USE uccis_14;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'Operator',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE signals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    signal_id VARCHAR(100) UNIQUE,
    source VARCHAR(255),
    severity VARCHAR(50),
    status VARCHAR(50),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE incidents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    incident_id VARCHAR(100) UNIQUE,
    trace_id VARCHAR(100),
    title VARCHAR(255),
    severity VARCHAR(50),
    status VARCHAR(50),
    owner VARCHAR(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE escalations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    escalation_id VARCHAR(100) UNIQUE,
    trace_id VARCHAR(100),
    priority VARCHAR(50),
    assigned_to VARCHAR(150),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE replays (
    id INT AUTO_INCREMENT PRIMARY KEY,
    replay_id VARCHAR(100) UNIQUE,
    trace_id VARCHAR(100),
    status VARCHAR(50),
    execution_time INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE evidence (
    id INT AUTO_INCREMENT PRIMARY KEY,
    evidence_id VARCHAR(100) UNIQUE,
    trace_id VARCHAR(100),
    file_name VARCHAR(255),
    evidence_type VARCHAR(100),
    uploaded_by VARCHAR(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);