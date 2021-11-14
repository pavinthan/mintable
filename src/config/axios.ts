import axois from "axios";
import { apiURL } from "config/env";
import type { AxiosRequestConfig, AxiosError } from "axios";

const appInstance = axois.create({
  baseURL: apiURL,
});

appInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = ""; // -> Get from store;

    if (token) {
      // config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => error
);

export default appInstance;
