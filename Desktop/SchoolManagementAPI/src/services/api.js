import axios from "axios";

const API_URL = "http://localhost:5226/api"; // your .NET backend API

// export individual functions
export const getStudents = () => axios.get(`${API_URL}/students`);
export const getTeachers = () => axios.get(`${API_URL}/teachers`);
export const getAchievements = () => axios.get(`${API_URL}/achievements`);
export const getGallery = () => axios.get(`${API_URL}/gallery`);
export const sendContactMessage = (data) => axios.post(`${API_URL}/contact`, data);
