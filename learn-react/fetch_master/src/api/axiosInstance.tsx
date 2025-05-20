import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});
export const axiosLocalInstance = axios.create({
  baseURL: "http://localhost:3001",
});
export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzE3N2MzMTlkOTgxYTg5Yzk3ZjZhYWZkOTUyMWVkMiIsIm5iZiI6MTc0NTQ2MzI2My4zOTYsInN1YiI6IjY4MDlhN2RmMjc2YmY2NGU0MWFiOGMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I28jCQzIIEb6c9xKeDJTkkSWn3DvkmEOZ-rVXoftbIs",
  },
});
