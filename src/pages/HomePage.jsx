import { useEffect, useState } from "react";
import { getTrendingMovies } from "../service/movieApi";
import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoader(true);
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {loader && <Loader />} {error && <p>{error}</p>}
      {movies.length && <MovieList movies={movies} />}
    </>
  );
}
