import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

const getAnswer = async (prompt) => axiosInstance.post("/message", { prompt });

export { getAnswer };
