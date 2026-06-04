import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const getZones = () => API.get("/zones/intelligence");

export const triggerExecution = (data) =>
  API.post("/execution/trigger", data);