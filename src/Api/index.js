import axios from "axios";
const api = axios.create({
  baseURL: "https://academics.newtonschool.co/api/v1",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2ZhYTIxN2FhMDY5MzljMzBjOTMxYiIsImlhdCI6MTcwMTgwMDc2OCwiZXhwIjoxNzMzMzM2NzY4fQ.Nq8WSMkyQKMOSUfAVh46FvQqUMiNDXlMRDDrRL4RVyc",
    projectId: "oaz6bln10cnp",
  },
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;
