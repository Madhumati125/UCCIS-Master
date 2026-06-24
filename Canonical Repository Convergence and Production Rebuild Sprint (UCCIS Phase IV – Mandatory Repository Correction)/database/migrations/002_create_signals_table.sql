CREATE TABLE signals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    signal_id VARCHAR(100) UNIQUE,
    source VARCHAR(255),
    severity VARCHAR(50),
    status VARCHAR(50),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);