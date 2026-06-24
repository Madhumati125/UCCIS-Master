# API DOCUMENTATION

Base URL

http://localhost:5000/api

---

AUTH

POST /auth/register

POST /auth/login

---

INCIDENTS

GET /incidents

POST /incidents

GET /incidents/:id

DELETE /incidents/:id

---

ESCALATIONS

GET /escalations

POST /escalations

DELETE /escalations/:id

---

REPLAYS

GET /replays

POST /replays

POST /replays/run/:id

---

EVIDENCE

GET /evidence

POST /evidence

---

ANALYTICS

GET /analytics

POST /analytics

---

TELEMETRY

GET /telemetry

POST /telemetry

---

RUNTIME

POST /runtime/start

GET /runtime/health

---

HEALTH

GET /health
