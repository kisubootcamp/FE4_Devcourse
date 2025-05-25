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
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzQzNDdlZTg2ZTRlMDczOWRhYTI2NDQzYjQ0OGQ1MyIsIm5iZiI6MTc0NTQ2MzAzNy43ODMsInN1YiI6IjY4MDlhNmZkMTVhMWQ1YTYxNGFiMDJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o8Hc7lbONL8rE7OJ0H8k6NhovAyZTD0KK09alUYrUpQ",
	},
});
