import { useContext, useEffect, useState } from "react";

import NavTabs from "../components/NavTabs";
import SectionTitle from "../components/SectionTitle";
import MovieCard from "../components/MovieCard";

import { _fetchAllTrendingInWeek, _fetchMoviesGenres } from "../services/api";
import { MoviesContext } from "../context/FetchMoviesContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function UpComingMoviesSection() {
  const { _allMovies, _allGenres } = useContext(MoviesContext);

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
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={4}
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
              <SwiperSlide key={movie.id}>
                <MovieCard
                  title={movie.name || movie.title}
                  imgUrl={movie.poster_path}
                  lang={movie.original_language}
                  date={movie.release_date || movie.first_air_date}
                  rating={movie.vote_average.toFixed(1)}
                  genre={movie.genre_ids.slice(0, 2)}
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
