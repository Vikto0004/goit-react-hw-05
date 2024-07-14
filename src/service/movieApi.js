import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmJhMGFmNDc4OGUzOWJkY2MyOGVjNThjODAzN2QwMiIsIm5iZiI6MTcyMDg4MjA1MC4xNTQ2NTgsInN1YiI6IjY2OTI5MTljZWIyZGNlOTNjMjZlNTBkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ms6feW5T8316qcAS1VC8eOgWqltW1lETGB8RcJwUr04",
  },
};

export async function getTrendingMovies() {
  try {
    const response = await axios.get("/popular?language=en-US", options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getDetailsMovie(id) {
  try {
    const response = await axios.get(`/${id}?language=en-US`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCastMovie(id) {
  try {
    const response = await axios.get(`/${id}/credits?language=en-US`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getReviewsMovie(id) {
  try {
    const response = await axios.get(`/${id}/reviews?language=en-US`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
