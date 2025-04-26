import axios from "axios";

// create 메서드는 객체를 매개변수로 전달받는다.
// create 메서드로 초기 설정 가능
export const axiosInstance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com", // 이렇게 적어주면 자동으로 이 쪽으로 데이터 요청이 들어가게 된다
});

export const axiosLocalInstance = axios.create({
	baseURL: "http://localhost:3001",
});
// 이렇게 여러개의 instance 사용 가능

export const movieInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzA2ZGRlYThiYmFkNTEwNWYxZTI2NzA1MjM2MjM2MiIsIm5iZiI6MTc0NTQ2MzA0Ny4wMDYsInN1YiI6IjY4MDlhNzA3ZTkyZjk0MGNhNjljZjE0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b1m807gMK-w8VuvlO9FImkhAywyUwbxPyYbkeJSDNgs",
  },
});
