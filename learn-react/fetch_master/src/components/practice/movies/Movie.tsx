import { useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { movieInstance } from "../../../api/axiosInstance";

export default function Movie() {
	const [nowPlaying, setNowPlaying] = useState<MovieType[]>([]);
	const [upcoming, setUpcoming] = useState<MovieType[]>([]);
	const [popular, setPopular] = useState<MovieType[]>([]);

	const fetchNowPlaying = async () => {
		const result = await movieInstance.get("movie/now_playing");
		// console.log(result);
		// console.log(result.data.results);
		setNowPlaying(result.data.results);
	};

	const fetchUpcoming = async () => {
		const result = await movieInstance.get("movie/now_playing");
		setUpcoming(result.data.results);
	};

	const fetchPopular = async () => {
		const result = await movieInstance.get("movie/popular");
		setPopular(result.data.results);
	};

	useEffect(() => {
		// const options = {
		// 	method: "GET",
		// 	headers: {
		// 		accept: "application/json",
		// 		// 인증. 값을 보면 Bearer로 시작하는 문자열이 있는데, 이걸 JWT라고 한다. 웹에서 나를 인증할 수 있는 키다. 이 토큰을 보고 내가 유효한 사용자다 싶으면 데이터를 주고 아니면 거부한다. 프론트엔드에서는 api요청을 할 때 JWT 토큰을 실어서 보낼 수 있구나 하고 알면 된다. 이걸 담아서 보낼 수 있는 그릇이 headers속성이다.
		// 		Authorization:
		// 			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzA2ZGRlYThiYmFkNTEwNWYxZTI2NzA1MjM2MjM2MiIsIm5iZiI6MTc0NTQ2MzA0Ny4wMDYsInN1YiI6IjY4MDlhNzA3ZTkyZjk0MGNhNjljZjE0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b1m807gMK-w8VuvlO9FImkhAywyUwbxPyYbkeJSDNgs",
		// 	},
		// }; // 너무 복잡하니까 axios쓰고 이부분은 api/axiosInstance로 뺐음.

		// fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options) // 여기서 options을 담아서 보내야 한다.
		// .then((res) => res.json())
		// .then((res) => console.log(res))
		// .catch((err) => console.error(err));
		fetchNowPlaying();
		fetchUpcoming();
		fetchPopular();
	}, []);

	return (
		<>
			{/* {JSON.stringify(nowPlaying)}; */}
			<MovieHeader />
			<MovieMain />
			<MovieList movies={nowPlaying} title="Now Playing" />
			<MovieList movies={upcoming} title="Upcoming" />
			<MovieList movies={popular} title="Popular" />
		</>
	);
}
