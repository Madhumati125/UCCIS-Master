# UCCIS Command Center Review Packet

## Runtime Chain

Signal
→ Telemetry
→ Incident
→ Escalation
→ Decision
→ Replay
→ Runtime Logs
→ Dashboard

---

## Integrated Scenarios

1. Flood Alert
2. Traffic Incident
3. Cyber Incident
4. Power Failure
5. Medical Emergency

---

## Runtime Evidence

Verified Flow:

Signal Generated

Telemetry Created

Incident Created

Escalation Triggered

Decision Approved

Replay Completed

Dashboard Updated

---

## Dashboard KPIs

Total Signals

Total Incidents

Total Telemetry Events

Runtime Logs

Scenario Breakdown

Runtime Health

---

## Deployment

npm install

Import:

database/schema/uccis_schema.sql

Run:

npm run dev

Backend URL:

http://localhost:5000

---

## API Endpoints

POST /api/signals

GET /api/signals

GET /api/incidents

GET /api/dashboard/kpis

GET /api/dashboard/scenarios

GET /api/dashboard/health

GET /api/runtime/logs

GET /api/runtime/replay

GET /api/runtime/trace/:traceId

---

Status: WORKING

Convergence Status:
PARTIALLY CONVERGED

Owner:
Madhumati

Integration:
Diwakar Signal Layer
