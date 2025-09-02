import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);
export const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
export default api;
