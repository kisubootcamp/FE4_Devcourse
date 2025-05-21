import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const axiosLocalInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDJlNjQ1NjQzYjQ4NzEzNjc0MTVhMDBlYzk5MDRkOCIsIm5iZiI6MTc0NTQ2MzE0Ny41MjQ5OTk5LCJzdWIiOiI2ODA5YTc2YmM1YzgwMzVmYjA4YWY4NDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zffAOH2jctVhVZIBg5s6wjx0T7AdG0s_gUStLfzgnZc",
  },
});
