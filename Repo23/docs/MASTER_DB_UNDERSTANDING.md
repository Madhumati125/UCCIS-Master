# MASTER_DB_UNDERSTANDING.md

## Objective

Understand how BHIV ecosystem data systems are structured.

---

# Learnings From DB Team

## Ankita Inputs

### Master DB Expectations

- canonical schema discipline
- centralized ownership
- normalized operational entities
- runtime lineage expectations
- operational provenance handling

### Population Discipline

- avoid random mock fields
- maintain stable identifiers
- relationship integrity mandatory

---

## Nupur Inputs

### MDU Layering

- raw layer
- processed layer
- operational intelligence layer
- dashboard consumption layer

### Schema Governance

- ownership boundaries
- schema evolution discipline
- lineage tracking
- replay-safe data organization

---

# How UCCIS Should Integrate

UCCIS should act as:

- operational intelligence consumption layer
- telemetry visualization layer
- escalation monitoring layer
- replay visibility layer

UCCIS should NOT become:

- uncontrolled data source
- isolated frontend-only system

---

# Open Questions

- escalation retention policy
- replay archival strategy
- telemetry aggregation windows
- operator identity normalization

---

# Weak Areas

- advanced lineage handling
- production DB scaling
- schema migration discipline
- event sourcing maturity

---

# Honest Assessment

Current UCCIS architecture is strong in:

- UI growth
- operational visualization
- replay awareness

Needs improvement in:

- data governance
- schema rigor
- runtime contracts
- ecosystem integration maturity
