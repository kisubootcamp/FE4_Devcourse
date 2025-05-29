import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const axiosLocalInstance = axios.create({
  baseURL: "https://localhost:3001",
});

export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWU3MGE5ZjhiZjY5OTg3MTY3ZmIyZmNlM2M4YjkwMSIsIm5iZiI6MTc0NTQ2MzAyNi4yMDUsInN1YiI6IjY4MDlhNmYyYzVjODAzNWZiMDhhZjdmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jZhu_KiYE3bCr-1ieqVZqxilx7oGVgtIGB2DFw3OjSY",
  },
});
