# UCCIS Architecture

UCCIS is a unified telemetry + runtime monitoring system.

## Layers:

1. Frontend Dashboard (React + Vite)
2. Backend API (Node + Express)
3. Telemetry Engine
4. Replay Engine
5. Logging System
6. MongoDB Storage

## Flow:

Telemetry → Backend API → Database → Dashboard → Replay Engine
