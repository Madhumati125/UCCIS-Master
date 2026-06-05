# UCCIS_SCHEMA

## State

WORKING

## Database Type

Relational

## Core Entity Model

### Departments

Purpose:
Organizational ownership.

Primary Key:
department_id

---

### Operators

Purpose:
Operational users.

Primary Key:
operator_id

Foreign Keys:
department_id

Relationship:
Many Operators belong to One Department.

---

### Locations

Purpose:
Geographic operational area.

Primary Key:
location_id

---

### Signals

Purpose:
Initial operational trigger.

Primary Key:
signal_id

Foreign Keys:
location_id

Relationship:
Many Signals belong to One Location.

---

### Telemetry Events

Purpose:
Signal processing evidence.

Primary Key:
event_id

Foreign Keys:
signal_id

Relationship:
Many Events belong to One Signal.

---

### Incidents

Purpose:
Operational issue record.

Primary Key:
incident_id

Foreign Keys:
event_id

Relationship:
Many Incidents originate from Events.

---

### Escalations

Purpose:
Operational escalation workflow.

Primary Key:
escalation_id

Foreign Keys:
incident_id

Relationship:
Many Escalations may originate from One Incident.

---

### Decisions

Purpose:
Response actions.

Primary Key:
decision_id

Foreign Keys:
escalation_id

Relationship:
Many Decisions belong to Escalations.

---

### Approvals

Purpose:
Governance authorization.

Primary Key:
approval_id

Foreign Keys:
decision_id

Relationship:
Many Approvals belong to Decisions.

---

### Replay Sessions

Purpose:
Incident replay generation.

Primary Key:
replay_id

Foreign Keys:
incident_id

Relationship:
Many Replays belong to Incidents.

---

### Runtime Logs

Purpose:
Execution evidence.

Primary Key:
log_id

Foreign Keys:
replay_id

Relationship:
Many Runtime Logs belong to Replay Sessions.

---

## Operational Relationship Chain

Signal

→ Telemetry Event

→ Incident

→ Escalation

→ Decision

→ Approval

→ Replay Session

→ Runtime Log

---

## Ownership Matrix

Departments:
Operations

Operators:
Operations

Signals:
Runtime Engine

Telemetry:
Runtime Engine

Incidents:
Operations

Escalations:
Operations

Decisions:
Governance

Approvals:
Governance

Replay Sessions:
Runtime Engine

Runtime Logs:
Runtime Engine
