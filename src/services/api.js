const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "f672fd5474a83c6dcb4aa4fc70872696";

const _fetchTopRatedMovies = () => {
  return `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
};

const _fetchAllTrendingInWeek = () => {
  return `${BASE_URL}/trending/all/week?api_key=${API_KEY}`; // TV, MOVIES, PEOPLE
};

const _fetchTvSeries = () => {
  return `${BASE_URL}/discover/tv?api_key=${API_KEY}`;
};

const _fetchUpcomingMovies = () => {
  return `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
};

const _fetchPopularMovies = () => {
  return `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
};

const _fetchMoviesGenres = () => {
  return `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
};


export {
  _fetchTopRatedMovies,
  _fetchAllTrendingInWeek,
  _fetchTvSeries,
  _fetchUpcomingMovies,
  _fetchPopularMovies,
  _fetchMoviesGenres,
};
