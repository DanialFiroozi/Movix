import { Link } from "react-router-dom";

function MovieCard({ imgUrl, title, genre, lang }) {
  return (
    <div className="movie-item movie-item-two mb-30">
      <div className="movie-poster">
        <Link to="/">
          <img src={imgUrl} alt="" />
        </Link>
      </div>
      <div className="movie-content">
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <h5 className="title">
          <Link to="/"> {title} </Link>
        </h5>
        <span className="rel"> {genre} </span>
        <div className="movie-content-bottom">
          <ul>
            <li className="tag">
              <span>HD</span>
              <span>{lang}</span>
            </li>
            <li>
              <span className="like">
                <i className="fas fa-thumbs-up"></i> 3.5
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
