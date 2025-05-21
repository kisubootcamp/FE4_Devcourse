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
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDAyYjg3ZDgxZjcyYWJjMDkzYTc5MGQzZmFmNDkxMyIsIm5iZiI6MTY2MTQ3NjQxOC43MjIsInN1YiI6IjYzMDgxZTQyODUwOTBmMDA4MjY4MjIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FiuyIpyt563fIpx0pq-95Dd1JxqtF963_H--qfrNBQo",
  },
});
