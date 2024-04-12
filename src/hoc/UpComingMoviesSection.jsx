import { useContext } from "react";

import NavTabs from "../components/NavTabs";
import SectionTitle from "../components/SectionTitle";
import MovieCard from "../components/MovieCard";

import { _fetchAllTrendingInWeek, _fetchMoviesGenres } from "../services/api";
import { MoviesContext } from "../context/FetchMoviesContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { TMDB_IMAGE_PREFIX } from "../utils/consonant";

import "swiper/css";
import "swiper/css/pagination";

function UpComingMoviesSection() {
  const { _allMovies, _allGenres } = useContext(MoviesContext);

  const convertGenreIdToName = () => {};

  //   const genreName = _allMovies
  //     ?.map((item) => item.genre_ids.slice(0, 2))[15]
  //     .map((g) => _allGenres[g]?.name);

  return (
    <section className="ucm-area ucm-bg2">
      <div className="container">
        <div className="row align-items-end mb-55">
          <div className="col-lg-6">
            <SectionTitle
              subTitle="ONLINE STREAMING"
              title="New Release Movies"
            />
          </div>
          <div className="col-lg-6">
            <NavTabs navTitle={["All", "People", "Movies"]} />
          </div>
        </div>

        <Swiper
          loop
          autoplay
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={4}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            680: {
              slidesPerView: 2,
            },
            999: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {_allMovies?.map((movie) => {
            return (
              <SwiperSlide>
                <MovieCard
                  title={
                    movie.name ||
                    movie.title ||
                    movie.original_title ||
                    movie.original_name
                  }
                  imgUrl={`${TMDB_IMAGE_PREFIX}${movie.poster_path}`}
                  lang={movie.original_language}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default UpComingMoviesSection;
