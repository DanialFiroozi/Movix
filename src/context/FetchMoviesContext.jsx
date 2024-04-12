import React, { createContext } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { _fetchAllTrendingInWeek, _fetchMoviesGenres } from "../services/api";

export const MoviesContext = createContext();

function FetchMoviesContext({ children }) {
  const fetchAllMovies = () => axios.get(_fetchAllTrendingInWeek());
  const fetchGenres = () => axios.get(_fetchMoviesGenres());

  const fetchedTrendMovies = useQuery({
    queryKey: ["fetch_trend_movies"],
    queryFn: fetchAllMovies,
  });

  const moviesGenres = useQuery({
    queryKey: ["fetch_genres"],
    queryFn: fetchGenres,
  });

  const _allMovies = fetchedTrendMovies.data?.data.results;
  const _allGenres = moviesGenres.data?.data.genres;

  return (
    <MoviesContext.Provider
      value={{ _allMovies, _allGenres }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default FetchMoviesContext;
