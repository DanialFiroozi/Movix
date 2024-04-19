import { useContext } from "react";

import SectionTitle from "../../SectionTitle";
import NavTabs from "../../NavTabs";
import Pagination from "../../Pagination";

import { MoviesContext } from "../../../context/FetchMoviesContext";
import MovieCardSkeletonLoading from "../../SkeletonLoading/MovieCardSkeletonLoading";
import MovieCard from "../../MovieCard";

function MoviesArchive() {
  const { _allTrendMovies, trendMoviesIsLoading } = useContext(MoviesContext);

  let showSkeletonLoading = [];

  for (let i = 1; i <= 4; i++) {
    showSkeletonLoading.push(
      <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={i}>
        <MovieCardSkeletonLoading />
      </div>
    );
  }
  return (
    <section className="movie-area movie-bg">
      <div className="container">
        <div className="row align-items-center mb-60">
          <div className="col-lg-6">
            <SectionTitle
              subTitle="ONLINE STREAMING"
              title="New Release Movies"
              additionalClass="text-lg-left"
            />
          </div>
          <div className="col-lg-6">
            <NavTabs navTitle={["All", "TV Series", "Movies"]} />
          </div>
        </div>

        <div className="row">{trendMoviesIsLoading && showSkeletonLoading}</div>

        <div className="row">
          {_allTrendMovies?.map((movie) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={movie.id}>
                <MovieCard
                  title={movie.name || movie.title}
                  imgUrl={movie.poster_path}
                  lang={movie.original_language}
                  date={movie.release_date || movie.first_air_date}
                  rating={movie.vote_average.toFixed(1)}
                  genre={movie.genre_ids.slice(0, 2)}
                />
              </div>
            );
          })}
        </div>

        <Pagination />
      </div>
    </section>
  );
}

export default MoviesArchive;
