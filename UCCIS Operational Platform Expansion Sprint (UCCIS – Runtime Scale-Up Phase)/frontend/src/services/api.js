import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export const getHealth = () => api.get("/health");

export const getSignals = () => api.get("/signals");

export const getIncidents = () => api.get("/incidents");

export const getReplay = () => api.get("/replay");

export const getTimeline = () => api.get("/timeline");

export const getAnalytics = () => api.get("/analytics");

export const getHistory = () => api.get("/history");

export const getDomains = () => api.get("/domains");

export const getEvidence = () => api.get("/evidence");

export const getTrace = (traceId) =>
  api.get(`/trace/${traceId}`);

export default api;