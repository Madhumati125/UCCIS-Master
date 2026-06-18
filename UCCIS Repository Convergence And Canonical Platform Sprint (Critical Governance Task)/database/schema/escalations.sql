CREATE TABLE escalations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trace_id VARCHAR(255),
    incident_id INT,
    escalation_level INT,
    assigned_team VARCHAR(255),
    escalation_status ENUM(
        'PENDING',
        'ACTIVE',
        'RESOLVED'
    ) DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (incident_id)
    REFERENCES incidents(id)
);