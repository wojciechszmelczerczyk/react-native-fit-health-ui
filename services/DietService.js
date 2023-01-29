import axios from "axios";
import { config } from "dotenv";
config();

const axiosInstance = axios.create({
  baseURL: process.env.FOOD_API_BASE_URL,
  headers: {
    "X-RapidAPI-Key": process.env.X_RAPIADPI_KEY,
    "X-RapidAPI-Host": process.env.X_RAPIADPI_HOST,
  },
});

const getDish = async (query) =>
  axiosInstance.get("/search", { params: { q: query } });

export { getDish };
