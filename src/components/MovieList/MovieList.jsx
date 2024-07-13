// import css from "./MovieList.module.css";
import MovieItem from "../MovieItem/MovieItem";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((data) => (
        <MovieItem key={data.id} data={data} />
      ))}
    </ul>
  );
}
