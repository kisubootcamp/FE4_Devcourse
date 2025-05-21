// import { useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
// import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { movieInstance } from "../../../api/axiosinstance";
import { Suspense } from "react";
import MovieList from "./MovieList";
import MovieLoader from "./MovieLoader";
import { ErrorBoundary } from "react-error-boundary";
import MovieError from "./MovieError";

const fetchMovie = async (url: string) => {
  await new Promise((resolve) =>
    setTimeout(
      resolve,
      [3000, 4000, 5000, 6000, 7000][Math.floor(Math.random() * 5)]
    )
  );
  const result = await movieInstance.get(url); //
  return result.data.results;
};

// 리액트19 use 훅
export default function Movie() {
  return (
    <>
      <MovieHeader />
      <MovieMain />
      {/* 서스펜스, UI가 로딩이 걸리면 그때 보여주는 처리를 할 수 있게 해줌 */}
      <ErrorBoundary fallback={<MovieError title="Now Playing" />}>
        <Suspense fallback={<MovieLoader title="Now Playing" />}>
          <MovieList
            fetchPromise={fetchMovie("/movie/now_playing")}
            title="Now Playing"
          />
        </Suspense>{" "}
      </ErrorBoundary>
      /{/* Suspense는 영역에 대한 loading처리를 해줌 */}
      <ErrorBoundary fallback={<MovieError title="Upcomming" />}>
        <Suspense fallback={<MovieLoader title="Upcomming" />}>
          <MovieList
            fetchPromise={fetchMovie("/movie/upcomming")}
            title="upcomming"
          />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<MovieError title="Popular" />}>
        <Suspense fallback={<MovieLoader title="Popular" />}>
          <MovieList
            fetchPromise={fetchMovie("/movie/popular")}
            title="Popular"
          />
        </Suspense>
      </ErrorBoundary>
      {/* <MovieList movies={nowPlaying} title="Now Playing" /> */}
      {/* <MovieList movies={upcomming} title="Up Playing" />
      <MovieList movies={popular} title="Up Playing" /> */}
    </>
  );
}
// 리액트를 서버 컴포넌트로 사용할 수는 없다.
// Error Boundary -> 렌더링 중에 발생하는 오류를 핸들링 하기 위해서 사용하는 패턴
// 전통적으로 클래스 컴포넌트로 작성되어야 한다.
