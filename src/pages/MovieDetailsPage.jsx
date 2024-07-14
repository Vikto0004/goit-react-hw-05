import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsMovie } from "../service/movieApi";
import Loader from "../components/Loader/Loader";
import ShortMovieDetails from "../components/ShortMovieDetails/ShortMovieDetails";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchDetailsMovie = async () => {
      try {
        const data = await getDetailsMovie(movieId);
        console.log(data);
        setDataMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchDetailsMovie();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />} {error && <p>{error}</p>}
      {dataMovie && <ShortMovieDetails data={dataMovie} />}
    </>
  );
}
