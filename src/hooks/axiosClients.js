import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const axiosClient = axios.create({
  baseURL: `http://127.0.0.1:8000/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const api = {
  get: async (url, config = {}) => {
      const response = await axiosClient.get(url, config);
      return response.data;
  },
  post: async (url, data, config = {}) => {
      const response = await axiosClient.post(url, data, config);
      return response.data;
  },
  put: async (url, data, config = {}) => {
      const response = await axiosClient.put(url, data, config);
      return response.data;
  }, 
};
