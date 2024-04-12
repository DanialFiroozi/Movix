const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "f672fd5474a83c6dcb4aa4fc70872696";
const TMDB_IMAGE_PREFIX = "http://image.tmdb.org/t/p/w500/";

const fetchTopRatedMovies = async () => {
  return `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
};

const fetchAllTrendingInWeek = async () => {
  return `${BASE_URL}/trending/all/week?api_key=${API_KEY}`; // TV, MOVIES, PEOPLE
};

const fetchTvSeries = async () => {
  return `${BASE_URL}/discover/tv?api_key=${API_KEY}`;
};

const fetchUpcomingMovies = async () => {
  return `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
};

const fetchPopularMovies = async () => {
  return `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
};

const fetchMoviesGenres = async () => {
  return `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
};

const fetchTvGenres = async () => {
  return `${BASE_URL}/genre/tv/list?api_key=${API_KEY}`;
};

export {
  fetchTopRatedMovies,
  fetchAllTrendingInWeek,
  fetchTvSeries,
  fetchUpcomingMovies,
  fetchPopularMovies,
  fetchMoviesGenres,
  fetchTvGenres,
  TMDB_IMAGE_PREFIX
};
