import { useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { movieInstance } from "../../../api/axiosinstance";

export default function Movie() {
  const [nowPlaying, setNowPlaying] = useState<MovieType>([]);
  const [upcomming, setUpComming] = useState<MovieType>([]);
  const [popular, setPopular] = useState<MovieType>([]);

  const fetchNowPlaying = async () => {
    const result = await movieInstance.get("/movie/now_playing"); //
    setNowPlaying(result.data.results);
  };
  const fetchUpComming = async () => {
    const result = await movieInstance.get("/movie/now_playing"); //
    setUpComming(result.data.results);
  };
  const fetchPopular = async () => {
    const result = await movieInstance.get("/movie/popular"); //
    setPopular(result.data.results);
  };

  useEffect(() => {
    fetchNowPlaying();
    fetchUpComming();
    fetchPopular();
  }, []);

  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieList movies={nowPlaying} title="Now Playing" />
      <MovieList movies={upcomming} title="Up Playing" />
      <MovieList movies={popular} title="Up Playing" />
    </>
  );
}
