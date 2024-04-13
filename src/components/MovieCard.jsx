import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { TMDB_IMAGE_PREFIX } from "../utils/consonant";
import { MoviesContext } from "../context/FetchMoviesContext";

import dayjs from "dayjs";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function MovieCard({ imgUrl, title, genre, lang, date, rating }) {
  const { _allGenres } = useContext(MoviesContext);
  const [movieGenre, setMovieGenre] = useState();

  useEffect(() => {
    _allGenres &&
      setMovieGenre(
        genre?.map(
          (genreId) => _allGenres.find((item) => item.id === genreId).name
        )
      );
  }, [_allGenres]);

  console.log(movieGenre);

  return (
    <div className="movie-item movie-item-two mb-30">
      <div className="movie-poster">
        <Link to="/">
          <img src={`${TMDB_IMAGE_PREFIX}${imgUrl}`} alt="" />
        </Link>
      </div>
      <div className="movie-content">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="title text-left mb-0">
            <Link to="/"> {title} </Link>

            <span className="rel genres d-flex justify-content-start align-items-center flex-wrap mt-3">
              {movieGenre?.map((item, index) => (
                <span key={index} className="genre bg-dark">
                  {" "}
                  {item}{" "}
                </span>
              ))}
            </span>
          </h5>
          <div className="rating circleRating">
            <CircularProgressbar
              value={rating}
              maxValue={10}
              text={rating}
              styles={buildStyles({
                pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
              })}
            />
          </div>
        </div>
        <div className="movie-content-bottom">
          <ul>
            <li className="tag">
              <span>HD</span>
              <span>{lang}</span>
            </li>
            <li>
              <span className="like">{dayjs(date).format("MMM D, YYYY")}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
