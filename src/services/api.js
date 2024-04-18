const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "f672fd5474a83c6dcb4aa4fc70872696";

const _fetchAllTrendingMovies = (page = 1) => {
  return `${BASE_URL}/trending/all/week?api_key=${API_KEY}&page=${page}`; // TV, MOVIES, PEOPLE
};

const _fetchTvSeries = () => {
  return `${BASE_URL}/discover/tv?api_key=${API_KEY}`;
};

const _fetchMoviesGenres = () => {
  return `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
};

const _fetchTvGenres = () => {
  return `${BASE_URL}/genre/tv/list?api_key=${API_KEY}`;
};

export {
  _fetchAllTrendingMovies,
  _fetchTvSeries,
  _fetchMoviesGenres,
  _fetchTvGenres,
};
