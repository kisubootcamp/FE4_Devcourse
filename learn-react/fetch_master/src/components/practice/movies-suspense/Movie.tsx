import { Suspense, useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { movieInstance } from "../../../api/axiosInstance";
import MovieLoader from "./MovieLoader";
import { ErrorBoundary } from "react-error-boundary";
import MovieError from "./MovieError";

const fetchMovie = async (url: string) => {
	await new Promise((resolve) => setTimeout(resolve, [3000, 4000, 5000, 6000, 7000][Math.floor(Math.random() * 5)])); // 의도적으로 지연주는 코드 -> 끝나는 것 부터 로딩이 되는 것을 볼 수 있다.
	const result = await movieInstance.get(url);
	return result.data.results;
};

// 리액트 19에서 등장한 use 훅 : 비동기 데이터를 마치 동기처럼 호출하게 해주는 훅이다
// use훅은 suspense와 같이 사용해야 됨

// Errorboundary -> 렌더링 중에 발생하는 오류를 핸들링하기 위해서 사용하는 패턴
// 전통적으로 클래스 컴포넌트로 작성되어야 함.
export default function Movie() {
	// fetchMovie("movie/now_playing");
	const fetchPromise = fetchMovie("movie/now_playing");
	const fetchPromise1 = fetchMovie("movie/now_playing222");
	// console.log(fetchPromise);

	// const data: null | string = null;
	return (
		<>
			{/* {JSON.stringify(nowPlaying)}; */}
			{/* {data!.toString()} */} {/* 강제로 에러 발생 */}
			<MovieHeader />
			<MovieMain />
			<ErrorBoundary fallback={<MovieError title="Now Playing"></MovieError>}>
				{/* 서스펜스(완충제..?) - 대체 UI를 보여줄 수 있음. UI가 로딩이 걸리면 그때 보여주는 처리를 할 수 있게 해줌 */}
				{/* <Suspense fallback={<h1>로딩중입니다...</h1>}> */}
				<Suspense fallback={<MovieLoader title="Now playing"></MovieLoader>}>
					{/* fallback 값에 JSX를 줄 수 있음 */}
					{/* Suspense로 묶인 곳의 자식 컴포넌트에 fetchPromise 전달 */}
					<MovieList fetchPromise={fetchPromise1} title="Now Playing" />
				</Suspense>
			</ErrorBoundary>
			<ErrorBoundary fallback={<MovieError title="Upcoming"></MovieError>}>
				{/* <Suspense fallback={<h1>로딩중입니다...</h1>}> */}
				<Suspense fallback={<MovieLoader title="Upcoming"></MovieLoader>}>
					<MovieList fetchPromise={fetchMovie("movie/upcoming")} title="Upcoming" />
				</Suspense>
			</ErrorBoundary>
			<ErrorBoundary fallback={<MovieError title="Popular"></MovieError>}>
				{/* <Suspense fallback={<h1>로딩중입니다...</h1>}> */}
				<Suspense fallback={<MovieLoader title="Popular"></MovieLoader>}>
					<MovieList fetchPromise={fetchMovie("movie/popular")} title="Popular" />
				</Suspense>
			</ErrorBoundary>
		</>
	);
}
