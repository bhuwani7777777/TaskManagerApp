import axios from "axios";

const API_URL = "https://localhost:7240/api/auth"; // replace with your port

export const register = async (data) => {
  return await axios.post(`${API_URL}/register`, data);
};

export const login = async (data) => {
  return await axios.post(`${API_URL}/login`, data);
};
