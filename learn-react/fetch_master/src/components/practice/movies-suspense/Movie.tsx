import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { movieInstance } from "../../../api/axiosinstance";
import { Suspense } from "react";
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
  const result = await movieInstance.get(url);
  return result.data.results;
};

// 리액트 19  use 훅
// ErrorBoundary -> 렌더링 중에 발생하는 오류를 핸들링 하기 위해서 사용하는 패턴
// 전통적으로 클래스 컴포넌트로 작성되어야 합니다.
export default function Movie() {
  return (
    <>
      <MovieHeader />
      <MovieMain />

      {/* 서스펜스 - UI가 로딩이 걸리면 그때 보여주는 처리를 할 수 있게 해줌 */}
      <ErrorBoundary fallback={<MovieError title="Now Playing" />}>
        <Suspense fallback={<MovieLoader title="Now Playing" />}>
          <MovieList
            fetchPromise={fetchMovie("/movie/now_playing222")}
            title="Now Playing"
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<MovieError title="Upcoming" />}>
        <Suspense fallback={<MovieLoader title="Upcoming" />}>
          <MovieList
            fetchPromise={fetchMovie("/movie/upcoming")}
            title="Upcoming"
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<MovieError title="Now Playing" />}>
        <Suspense fallback={<MovieLoader title="Now Playing" />}>
          <MovieList
            fetchPromise={fetchMovie("/movie/popular")}
            title="Popular"
          />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
