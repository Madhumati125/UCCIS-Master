CREATE TABLE signals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trace_id VARCHAR(255) NOT NULL,
    signal_name VARCHAR(255) NOT NULL,
    signal_type VARCHAR(100),
    severity ENUM(
        'LOW',
        'MEDIUM',
        'HIGH',
        'CRITICAL'
    ) DEFAULT 'LOW',
    status ENUM(
        'ACTIVE',
        'INACTIVE',
        'RESOLVED'
    ) DEFAULT 'ACTIVE',
    source VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP
);