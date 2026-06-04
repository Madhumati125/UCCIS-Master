# UCCIS DATA MODEL

## Entity Flow

signal_id
→ telemetry_id
→ escalation_id
→ dashboard_view_id
→ replay_id
→ runtime_log_ref
→ reconstruction_ref

## Core Entities

### Department

- department_id
- department_name
- operator_count

### District

- district_id
- district_name
- population

### Signal

- signal_id
- signal_type
- severity
- timestamp

### Telemetry

- telemetry_id
- signal_id
- status
- latency
- health_score

### Escalation

- escalation_id
- telemetry_id
- priority
- acknowledgement_status

### Replay Event

- replay_id
- event_type
- reconstruction_status

### Runtime State

- runtime_id
- cpu_load
- active_alerts
- degraded_mode
