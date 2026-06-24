CREATE TABLE replays (
    id INT AUTO_INCREMENT PRIMARY KEY,
    replay_id VARCHAR(100) UNIQUE,
    trace_id VARCHAR(100),
    status VARCHAR(50),
    execution_time INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);