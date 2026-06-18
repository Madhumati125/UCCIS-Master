CREATE TABLE telemetry (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trace_id VARCHAR(255) NOT NULL,
    metric_name VARCHAR(255),
    metric_value DECIMAL(10,2),
    unit VARCHAR(50),
    status ENUM(
        'HEALTHY',
        'WARNING',
        'CRITICAL'
    ) DEFAULT 'HEALTHY',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);