# MASTER DB UNDERSTANDING

## Canonical Entities

- Departments
- Districts
- Signals
- Telemetry
- Escalations
- Operators
- Replay Events
- Runtime States
- Dashboard Views

## Schema Ownership

Each operational entity owns:

- ID
- timestamps
- lifecycle state
- source reference
- relationship references

## UCCIS Modeling Approach

Signals:
originating operational alerts.

Telemetry:
live operational measurements.

Escalations:
priority operational actions.

Replay:
historical reconstruction events.

Runtime:
current operational health state.

## Important Learnings

- UCCIS must not assume telemetry is always valid.
- Replay data may arrive delayed.
- Escalations can outlive telemetry sessions.
