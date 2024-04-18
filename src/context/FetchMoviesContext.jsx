import React, { createContext } from "react";

import axios from "axios";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import {
  _fetchAllTrendingMovies,
  _fetchMoviesGenres,
  _fetchTvGenres,
  _fetchTvSeries,
} from "../services/api";

export const MoviesContext = createContext();

function FetchMoviesContext({ children }) {
  const fetchAllTrendMovies = () => axios.get(_fetchAllTrendingMovies());
  const fetchTvSeries = () => axios.get(_fetchTvSeries());
  const fetchMoviesGenres = () => axios.get(_fetchMoviesGenres());
  const fetchTvGenres = () => axios.get(_fetchTvGenres());

  const { data: fetchedAllTrendMovies, isLoading: trendMoviesIsLoading } =
    useQuery({
      queryKey: ["fetch_trend_movies"],
      queryFn: fetchAllTrendMovies,
    });

  const { data: fetchedTvSeries, isLoading: tvSeriesIsLoading } = useQuery({
    queryKey: ["fetch_tv_series"],
    queryFn: fetchTvSeries,
  });

  const moviesGenres = useQuery({
    queryKey: ["fetch_movies_genres"],
    queryFn: fetchMoviesGenres,
  });

  const tvGenres = useQuery({
    queryKey: ["fetch_tv_genres"],
    queryFn: fetchTvGenres,
  });

  const _allTvSeries = fetchedTvSeries?.data.results;
  const _allTrendMovies = fetchedAllTrendMovies?.data.results;
  const concatGenres = moviesGenres.data?.data.genres.concat(
    tvGenres.data?.data.genres
  );

  const ids = concatGenres?.map(({ id }) => id);
  const _allGenres = concatGenres?.filter(
    ({ id }, index) => !ids.includes(id, index + 1)
  );

  return (
    <MoviesContext.Provider
      value={{
        _allTrendMovies,
        _allGenres,
        _allTvSeries,
        trendMoviesIsLoading,
        tvSeriesIsLoading,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default FetchMoviesContext;
