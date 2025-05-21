import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
export const axiosLocalInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

export const movieInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGU4ZDE4MzBiZThlYjIwNzNmNGZiZWQ4NDBjYmZlNSIsIm5iZiI6MTc0NTQ2MzAxNi4wMTgsInN1YiI6IjY4MDlhNmU4Mjc2YmY2NGU0MWFiOGJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWyPCLHlHU9qHQHAjquGqlzzNqJdlU_0wdQYeLwGQzQ',
  },
});
