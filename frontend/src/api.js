import axios from "axios";

const baseURL = import.meta.env.DEV
  ? "http://localhost:3000/api"
  : "/api";

  const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
// const API = axios.create({
//   //baseURL: "http://localhost:3000/api", // change if needed 
//   baseURL: "https://hotel-management-system.onrender.com/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;