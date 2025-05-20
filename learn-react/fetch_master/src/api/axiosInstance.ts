import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});
export const axiosLocalInstance = axios.create({
  baseURL: "http://localhost:3001/posts",
});
export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzQ0ZDAyNTBjNTY3YjMxODBjNWNkM2Y0NjQ3MWEwNSIsIm5iZiI6MTc0NTQ2MzA0MS4xMjksInN1YiI6IjY4MDlhNzAxMjc2YmY2NGU0MWFiOGJkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jiCtRyW3r0zARk4hJ5RTvBE77-0AOJlj0H1K95RTYbM",
  },
});
