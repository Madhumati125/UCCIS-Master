CREATE TABLE incidents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trace_id VARCHAR(255),
    title VARCHAR(255),
    description TEXT,
    priority ENUM(
        'P1',
        'P2',
        'P3',
        'P4'
    ) DEFAULT 'P4',
    status ENUM(
        'OPEN',
        'IN_PROGRESS',
        'RESOLVED',
        'CLOSED'
    ) DEFAULT 'OPEN',
    assigned_to VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP
);