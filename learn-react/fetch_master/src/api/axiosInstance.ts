//여러 url 사용가능
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
    //jwt 토큰을 담아서 전달해줄 수 있다
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDk1Y2JlZDgyOWRlNmZlMWRmMGRlOTgwZjE0ZWVmNiIsIm5iZiI6MTc0NTQ2MzA0NS43MjcsInN1YiI6IjY4MDlhNzA1MTMwZjc2ZWIzYjljZjFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-fRVFBoT5D1qGn_8UDh7XbOIjtZ5WKT8Tv9RiH0Jt7g",
  },
});
