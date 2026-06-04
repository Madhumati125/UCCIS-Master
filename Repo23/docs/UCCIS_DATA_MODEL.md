# UCCIS_DATA_MODEL.md

# Core Operational Entities

---

## Telemetry

| Field         | Type      |
| ------------- | --------- |
| telemetry_id  | UUID      |
| signal_source | STRING    |
| severity      | STRING    |
| district      | STRING    |
| created_at    | TIMESTAMP |

---

## Escalations

| Field             | Type      |
| ----------------- | --------- |
| escalation_id     | UUID      |
| telemetry_id      | UUID      |
| escalation_level  | STRING    |
| status            | STRING    |
| assigned_operator | STRING    |
| created_at        | TIMESTAMP |

---

## Replay Events

| Field            | Type      |
| ---------------- | --------- |
| replay_id        | UUID      |
| escalation_id    | UUID      |
| replay_timestamp | TIMESTAMP |
| replay_type      | STRING    |

---

## Operators

| Field         | Type    |
| ------------- | ------- |
| operator_id   | UUID    |
| operator_name | STRING  |
| department    | STRING  |
| active_status | BOOLEAN |

---

## Runtime Logs

| Field           | Type      |
| --------------- | --------- |
| runtime_log_ref | UUID      |
| component       | STRING    |
| event_type      | STRING    |
| created_at      | TIMESTAMP |

---

# Entity Relationships

Telemetry
→ Escalation
→ Replay
→ Dashboard Visibility

Operators
→ Departments
→ Escalation Ownership

Runtime Logs
→ All Operational Components

---

# Operational Flow

Signal
→ Telemetry Event
→ Dashboard Update
→ Escalation Trigger
→ Replay Storage
→ Runtime Visibility
