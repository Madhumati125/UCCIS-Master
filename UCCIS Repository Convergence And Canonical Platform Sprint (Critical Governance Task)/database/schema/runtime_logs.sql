CREATE TABLE runtime_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trace_id VARCHAR(255),
    layer_name VARCHAR(255),
    execution_status ENUM(
        'SUCCESS',
        'FAILED',
        'RUNNING'
    ),
    message TEXT,
    execution_time INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);