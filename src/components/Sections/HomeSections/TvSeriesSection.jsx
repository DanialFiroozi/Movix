import { useContext } from "react";
import SectionTitle from "../../SectionTitle";

import { Link } from "react-router-dom";
import { MoviesContext } from "../../../context/FetchMoviesContext";
import MovieCard from "../../MovieCard";
import MovieCardSkeletonLoading from "../../SkeletonLoading/MovieCardSkeletonLoading";

function TvSeriesSection() {
  const { _allTvSeries, tvSeriesIsLoading } = useContext(MoviesContext);

  let showSkeletonLoading = [];

  for (let i = 1; i <= 20; i++) {
    showSkeletonLoading.push(
      <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={i}>
        <MovieCardSkeletonLoading />
      </div>
    );
  }

  return (
    <section className="top-rated-movie tr-movie-bg2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              subTitle="Tv Series"
              title="Top Online Shows Watch"
              additionalClass="mb-70"
            />
          </div>
        </div>

        <div className="row movie-item-row">
          {tvSeriesIsLoading && showSkeletonLoading}

          {_allTvSeries?.slice(0, 8).map((movie) => {
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
        <div className="tr-movie-btn text-center mt-25">
          <Link to="/movies" className="btn">
            BROWSE ALL MOVIES
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TvSeriesSection;
