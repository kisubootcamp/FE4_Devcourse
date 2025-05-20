import { use } from "react";
import MovieListItem from "./MovieListItem";

export default function MovieList({
  fetchPromise,
  title,
}: {
  fetchPromise: Promise<MovieType[]>;
  title: string;
}) {
  // use 훅은 비동기에 대한 처리를 기다려줌
  // 그리고 그 결과를 movies에 담아줌
  const movies = use(fetchPromise);
  return (
    <>
      <article className="bg-black px-4 pt-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{title}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            {movies &&
              movies.map((movie) => (
                <MovieListItem key={movie.id} {...movie} />
              ))}
          </div>
        </section>
      </article>
    </>
  );
}
