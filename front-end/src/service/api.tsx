import axios from "axios";

const BASE_URL = "http://localhost:3001/";

export const publicRoutes = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export const privateRoutes = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("@agenda:token") as string)}`,
  },
});
