CREATE TABLE evidence (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trace_id VARCHAR(255),
    file_name VARCHAR(255),
    file_type VARCHAR(100),
    file_path TEXT,
    verification_status ENUM(
        'PENDING',
        'VERIFIED',
        'REJECTED'
    ) DEFAULT 'PENDING',
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);