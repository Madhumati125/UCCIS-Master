CREATE TABLE evidence (
    id INT AUTO_INCREMENT PRIMARY KEY,
    evidence_id VARCHAR(100) UNIQUE,
    trace_id VARCHAR(100),
    file_name VARCHAR(255),
    evidence_type VARCHAR(100),
    uploaded_by VARCHAR(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);