import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
import { getToken, removeToken } from "@/utils/token";

let baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  throw new Error("VITE_API_URL is not defined");
}

if (!baseURL.startsWith("http://") && !baseURL.startsWith("https://")) {
  baseURL = `https://${baseURL}`;
}

const axiosInstance = axios.create({
  baseURL: `${baseURL}${baseURL.includes("/api/v1") ? "" : "/api/v1"}`,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      removeToken();
    }

    if (error.response?.status === 403) {
      console.error("Access forbidden:", error.response.data);
    }
    if (!error.response) {
      console.error("Network error:", error.message);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
