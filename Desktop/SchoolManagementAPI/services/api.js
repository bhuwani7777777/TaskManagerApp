import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:xxxx/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);

export default API;
