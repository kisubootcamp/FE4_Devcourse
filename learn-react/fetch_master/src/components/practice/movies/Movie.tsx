import { useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { movieInstance } from "../../../api/axiosinstance";

export default function Movie() {
  const [nowPlaying, setNowPlaying] = useState<MovieType[]>([]);
  const [upcoming, setUpcoming] = useState<MovieType[]>([]);
  const [popular, setPopular] = useState<MovieType[]>([]);

  const fetchNowplaying = async () => {
    const result = await movieInstance.get("movie/now_playing");
    setNowPlaying(result.data.results);
  };

  const fetchUpcoming = async () => {
    const result = await movieInstance.get("movie/upcoming");
    setUpcoming(result.data.results);
  };

  const fetchPoplular = async () => {
    const result = await movieInstance.get("movie/popular");
    setPopular(result.data.results);
  };

  useEffect(() => {
    fetchNowplaying();
    fetchUpcoming();
    fetchPoplular();
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
