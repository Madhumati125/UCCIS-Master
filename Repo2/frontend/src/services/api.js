import axios from "axios";

const API = axios.create({
  baseURL: "/",
  headers: { "Content-Type": "application/json" }
});

export const getZones = () => API.get("/zones");
export const sendDecisionRequest = (data) => API.post("/request/decision", data);

export default API;