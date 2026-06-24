CREATE TABLE escalations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    escalation_id VARCHAR(100) UNIQUE,
    trace_id VARCHAR(100),
    priority VARCHAR(50),
    assigned_to VARCHAR(150),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);