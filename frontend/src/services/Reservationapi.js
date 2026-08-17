import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:3000/",
  baseURL: "https://hotel-management-system-0rbr.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;