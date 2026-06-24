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