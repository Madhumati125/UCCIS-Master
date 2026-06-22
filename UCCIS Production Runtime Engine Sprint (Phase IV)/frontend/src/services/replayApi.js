import axios from "axios";

const API =
  "http://localhost:5000/api";

export const getReplayData =
  async () => {
    const response =
      await axios.get(
        `${API}/replay`
      );

    return response.data;
  };

export const getReplayByTrace =
  async traceId => {
    const response =
      await axios.get(
        `${API}/replay/${traceId}`
      );

    return response.data;
  };