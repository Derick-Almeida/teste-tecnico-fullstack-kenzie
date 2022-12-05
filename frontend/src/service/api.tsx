import axios from "axios";

const BASE_URL = "http://localhost:4000/";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});
