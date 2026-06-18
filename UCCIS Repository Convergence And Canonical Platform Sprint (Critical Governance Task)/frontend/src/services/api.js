import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000
});

api.interceptors.request.use(
  (config) => {
    console.log(
      `[API REQUEST] ${config.method?.toUpperCase()} ${config.url}`
    );

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    console.log(
      `[API RESPONSE] ${response.status}`
    );

    return response;
  },
  (error) => {
    console.error(
      "[API ERROR]",
      error.response?.data || error.message
    );

    return Promise.reject(error);
  }
);

export default api;