import { useEffect, useState } from "react";
import { movieInstance } from "../../../api/axiosInstance";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";

export default function Movie() {
  const [nowPlaying, setNowPlaying] = useState<MovieType[]>([]);
  const [upcoming, setUpcoming] = useState<MovieType[]>([]);
  const [popular, setPopular] = useState<MovieType[]>([]);

  const fetchNowPlaying = async () => {
    const result = await movieInstance.get("/movie/now_playing");
    setNowPlaying(result.data.results);
  };
  const fetchUpcoming = async () => {
    const result = await movieInstance.get("/movie/upcoming");
    setUpcoming(result.data.results);
  };
  const fetchPopular = async () => {
    const result = await movieInstance.get("/movie/now_playing");
    setPopular(result.data.results);
  };
  useEffect(() => {
    fetchNowPlaying();
    fetchUpcoming();
    fetchPopular();
  }, []);
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieList movies={nowPlaying} title="Now Playing" />
      <MovieList movies={upcoming} title="Upcoming" />
      <MovieList movies={popular} title="Popular" />
    </>
  );
}
