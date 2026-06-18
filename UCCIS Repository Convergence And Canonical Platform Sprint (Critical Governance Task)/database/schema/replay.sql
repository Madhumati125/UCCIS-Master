CREATE TABLE replay (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trace_id VARCHAR(255),
    replay_status ENUM(
        'STARTED',
        'RUNNING',
        'SUCCESS',
        'FAILED'
    ) DEFAULT 'STARTED',
    replay_start TIMESTAMP,
    replay_end TIMESTAMP,
    execution_time INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);