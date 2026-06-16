import api from "../api/axios";

export const getRuntimeSummary = async () => {
  const response = await api.get(
    "/runtime/summary"
  );

  return response.data;
};

export const getTraceIds = async () => {
  const response = await api.get(
    "/runtime/trace-ids"
  );

  return response.data;
};

export const getHealth = async () => {
  const response = await api.get(
    "/health"
  );

  return response.data;
};

export const getReplayData = async () => {
  const response = await api.get(
    "/replay"
  );

  return response.data;
};

export const getRuntimeChain =
  async (traceId) => {

    const response =
      await api.get(
        `/runtime/chain/${traceId}`
      );

    return response.data;
  };