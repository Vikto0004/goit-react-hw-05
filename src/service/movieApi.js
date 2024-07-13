import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmJhMGFmNDc4OGUzOWJkY2MyOGVjNThjODAzN2QwMiIsIm5iZiI6MTcyMDg4MjA1MC4xNTQ2NTgsInN1YiI6IjY2OTI5MTljZWIyZGNlOTNjMjZlNTBkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ms6feW5T8316qcAS1VC8eOgWqltW1lETGB8RcJwUr04",
  },
};

export async function getTrendingMovies() {
  try {
    const response = await axios.get("/movie/popular?language=en-US", options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
