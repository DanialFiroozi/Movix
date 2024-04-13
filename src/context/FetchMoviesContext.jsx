import React, { createContext } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import {
  _fetchAllTrendingInWeek,
  _fetchMoviesGenres,
  _fetchTvGenres,
} from "../services/api";

export const MoviesContext = createContext();

function FetchMoviesContext({ children }) {
  const fetchAllMovies = () => axios.get(_fetchAllTrendingInWeek());
  const fetchMoviesGenres = () => axios.get(_fetchMoviesGenres());
  const fetchTvGenres = () => axios.get(_fetchTvGenres());

  const fetchedTrendMovies = useQuery({
    queryKey: ["fetch_trend_movies"],
    queryFn: fetchAllMovies,
  });

  const moviesGenres = useQuery({
    queryKey: ["fetch_movies_genres"],
    queryFn: fetchMoviesGenres,
  });

  const tvGenres = useQuery({
    queryKey: ["fetch_tv_genres"],
    queryFn: fetchTvGenres,
  });

  const _allMovies = fetchedTrendMovies.data?.data.results;
  const concatGenres = moviesGenres.data?.data.genres.concat(
    tvGenres.data?.data.genres
  );

  const ids = concatGenres?.map(({ id }) => id);
  const _allGenres = concatGenres?.filter(
    ({ id }, index) => !ids.includes(id, index + 1)
  );

  return (
    <MoviesContext.Provider value={{ _allMovies, _allGenres }}>
      {children}
    </MoviesContext.Provider>
  );
}

export default FetchMoviesContext;
