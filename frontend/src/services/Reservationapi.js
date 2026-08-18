import axios from "axios";

const baseURL = import.meta.env.DEV
  ? "http://localhost:3000/api"
  : "/api";

const api = axios.create({
  //baseURL: "http://localhost:3000/",
  // baseURL: "https://hotel-management-system.onrender.com",
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;