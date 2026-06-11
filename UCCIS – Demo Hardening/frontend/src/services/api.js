const API_BASE_URL = "http://localhost:5000";

export const getHealth = async () => {
  const response = await fetch(
    `${API_BASE_URL}/api/dashboard/health`
  );
  return response.json();
};

export const getKPIs = async () => {
  const response = await fetch(
    `${API_BASE_URL}/api/dashboard/kpis`
  );
  return response.json();
};

export const getIncidents = async () => {
  const response = await fetch(
    `${API_BASE_URL}/api/incidents`
  );
  return response.json();
};

export const getRuntimeLogs = async () => {
  const response = await fetch(
    `${API_BASE_URL}/api/runtime/logs`
  );
  return response.json();
};

export const getReplayEvents = async () => {
  const response = await fetch(
    `${API_BASE_URL}/api/runtime/replay`
  );
  return response.json();
};