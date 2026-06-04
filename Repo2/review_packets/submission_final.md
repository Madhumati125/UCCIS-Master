UCCIS Convergence Integration Sprint (UCCIS – Intelligence Interface Layer)
ENTRY POINT
Frontend: frontend/index.html

Backend: backend/server.js

CORE EXECUTION FLOW
script.js: Manages API communication and dynamic UI updates for the traffic dashboard.

server.js: Handles routing and processes requests for zone telemetry.

zones.json: Acts as the primary data source for traffic counts, violations, and congestion levels.

LIVE FLOW
User opens UI: The Traffic Dashboard initializes the map and zone cards.

API called: The frontend requests the current state of all five city zones.

Backend responds: The server serves data reflecting traffic metrics (e.g., Zone 4 at 82 traffic units).

UI updates: The dashboard populates alerts (e.g., HIGH_TRAFFIC) and recommendation panels.

REAL JSON RESPONSE
JSON
{
"zones": [
{"id": 1, "status": "GREEN", "traffic": 30, "violations": 2, "congestion": "LOW"},
{"id": 2, "status": "YELLOW", "traffic": 55, "violations": 5, "congestion": "MEDIUM"},
{"id": 3, "status": "GREEN", "traffic": 68, "violations": 9, "congestion": "MEDIUM"},
{"id": 4, "status": "GREEN", "traffic": 82, "violations": 15, "congestion": "HIGH"},
{"id": 5, "status": "GREEN", "traffic": 75, "violations": 12, "congestion": "HIGH"}
]
}
WHAT WAS BUILT
Zone UI: A card-based layout showing status colors (Green/Yellow) and specific metrics for five Nagpur zones.

Alert Panel: A notification system that triggers HIGH_TRAFFIC or MEDIUM_TRAFFIC warnings based on volume.

Action Panel: Functional "Deploy Traffic" buttons that process deployment requests through the Intelligence Layer.

Recommendation Panel: Automated logic suggesting "Increase signal timing / deploy traffic police" for active hotspots.

FAILURE CASES
Backend down: The Leaflet map may load, but the zone data cards and deployment status will remain empty.

Invalid JSON: The Intelligence Layer will fail to parse trends, preventing the "Approved" or "Rejected" status from appearing.

No data: The dashboard shows a blank state or default values, hindering the command center's ability to see traffic trends.

PROOF
Screenshots:

Main Traffic Dashboard Overview: WhatsApp Image 2026-05-04 at 1.00.21 PM.jpeg (Screenshot is mentioned in Github)

Intelligence Layer Deployment Status: WhatsApp Image 2026-05-04 at 1.00.23 PM.jpeg (Screenshot is mentioned in Github)

Before/After API: Data transitions from raw JSON values to visual status indicators (e.g., Zone 4 moving to "HIGH" congestion).

Action trigger results:

Zone 3, 4, 5: Successfully triggered "Approved" status due to increasing trends.

Zone 2: Triggered "Rejected" status following moderate traffic analysis.
