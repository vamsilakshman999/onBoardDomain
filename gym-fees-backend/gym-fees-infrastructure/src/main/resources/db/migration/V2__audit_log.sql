CREATE TABLE audit_log (
  id SERIAL PRIMARY KEY,
  entity_id VARCHAR(36),
  entity_type VARCHAR(100),
  diff JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
