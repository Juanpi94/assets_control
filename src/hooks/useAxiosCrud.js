import { useState } from "react";
import axios from "axios";

const useAxiosCrud = () => {
  const baseURL = "http://127.0.0.1:8000/api/";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para realizar una solicitud GET
  const get = async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}${endpoint}`);
      setData(response.data.data);
      setError(null);
    } catch (err) {
      setData(null);
      setError(err.message || "Error creating data");
    } finally {
      setLoading(false);
    }
  };

  // Función para realizar una solicitud POST
  const post = async (endpoint, body) => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseURL}${endpoint}`, body);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message || "Error creating data");
    } finally {
      setLoading(false);
    }
  };

  // Función para realizar una solicitud PUT
  const put = async (endpoint, body) => {
    setLoading(true);
    try {
      const response = await axios.put(`${baseURL}${endpoint}`, body);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message || "Error updating data");
    } finally {
      setLoading(false);
    }
  };

  // Función para realizar una solicitud DELETE
  const remove = async (endpoint) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${baseURL}${endpoint}`);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message || "Error deleting data");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    get,
    post,
    put,
    remove,
  };
};

export default useAxiosCrud;
