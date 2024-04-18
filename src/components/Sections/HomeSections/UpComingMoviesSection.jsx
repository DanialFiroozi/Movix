import { useContext, useState } from "react";

import NavTabs from "../../NavTabs";
import SectionTitle from "../../SectionTitle";
import MovieCard from "../../MovieCard";

import { MoviesContext } from "../../../context/FetchMoviesContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import MovieCardSkeletonLoading from "../../SkeletonLoading/MovieCardSkeletonLoading";

function UpComingMoviesSection() {
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
    <section className="ucm-area ucm-bg2">
      <div className="container">
        <div className="row align-items-center mb-55">
          <div className="col-lg-6">
            <SectionTitle
              subTitle="ONLINE STREAMING"
              title="New Release Movies"
              additionalClass="text-lg-left"
            />
          </div>
          <div className="col-lg-6">
            <NavTabs navTitle={["All", "People", "Movies"]} />
          </div>
        </div>

        <div className="row">{trendMoviesIsLoading && showSkeletonLoading}</div>

        <Swiper
          loop
          autoplay
          modules={[Autoplay]}
          spaceBetween={32}
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
          {_allTrendMovies?.map((movie) => {
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
