# UCCIS MASTER ARCHITECTURE

Version: 1.0.0

## Runtime Flow

Signal
↓
Telemetry
↓
Incident
↓
Escalation
↓
Replay
↓
Evidence
↓
Analytics
↓
Executive Dashboard
↓
Observability
↓
Health Monitoring

---

## Frontend

React
React Router
Axios
Recharts

Pages

Dashboard
Incidents
Escalations
Replay
Evidence
Analytics
Observability
Settings

---

## Backend

Node.js
Express.js
MongoDB

Modules

Signal Runtime Engine
Telemetry Engine
Incident Engine
Escalation Engine
Replay Engine
Evidence Engine
Analytics Engine
Observability Engine

---

## Database Collections

users
telemetry
incidents
escalations
replays
evidence
analytics

---

## Deployment

Docker
Docker Compose
Nginx
Kubernetes

---

## Runtime Contracts

Trace ID propagated through every module.

Example:

TRACE-1001

Signal
Telemetry
Incident
Escalation
Replay
Evidence
Analytics
Observability
