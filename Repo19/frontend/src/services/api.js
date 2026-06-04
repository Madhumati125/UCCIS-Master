const API_BASE =
  "http://localhost:5000/api";

export const fetchTelemetry =
  async () => {

    const response =
      await fetch(
        `${API_BASE}/telemetry`
      );

    return response.json();

  };

export const fetchAlerts =
  async () => {

    const response =
      await fetch(
        `${API_BASE}/alerts`
      );

    return response.json();

  };

export const fetchEscalation =
  async () => {

    const response =
      await fetch(
        `${API_BASE}/escalation`
      );

    return response.json();

  };

export const fetchReplay =
  async () => {

    const response =
      await fetch(
        `${API_BASE}/replay`
      );

    return response.json();

  };

export const fetchHealth =
  async () => {

    const response =
      await fetch(
        `${API_BASE}/health`
      );

    return response.json();

  };