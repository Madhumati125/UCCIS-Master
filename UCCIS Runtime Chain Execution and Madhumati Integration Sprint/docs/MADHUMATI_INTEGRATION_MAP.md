# MADHUMATI INTEGRATION MAP

## System Integration Overview

This document maps all major modules within the UCCIS ecosystem.

## Architecture Map

Frontend (React)
↓
Signal Dashboard
↓
API Layer (Node.js/Express)
↓
Core Engine
├── Signal Processor
├── Rule Engine
├── Incident Detector
├── Replay System
└── Logger
↓
Database Layer (MongoDB / SQL)

## Integration Points

- Signal ingestion API
- Incident streaming API
- Replay reconstruction API
- Health monitoring API

## Data Flow

Input → Normalize → Evaluate → Detect → Store → Visualize

## System Dependency Map

- Frontend depends on API layer
- API depends on Core Engine
- Core Engine depends on DB

## Conclusion

System is modular, loosely coupled, and fully traceable.
