import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWViZTBhODk3NjMxYzZkZjRhM2JlMjgyNDFiMGE1NCIsIm5iZiI6MTc0NTQ2MzA2NC41ODUsInN1YiI6IjY4MDlhNzE4MTVhMWQ1YTYxNGFiMDJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Ouhv2RjrRxlZjmhE_Z6tXZCLlxW7iwMwO8-AX3p_WI",
  },
});
