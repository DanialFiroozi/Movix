import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MovieCardSkeletonLoading() {
  return (
    <SkeletonTheme baseColor="#979797">
      <div className="movie-item movie-item-two mb-30">
        <div className="movie-poster">
          <Skeleton height={350} />
        </div>
        <div className="movie-content">
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="title text-left mb-0">
              <Skeleton width={180} />

              <span className="rel genres d-flex justify-content-start align-items-center flex-wrap mt-3">
                <span className="genre">
                  <Skeleton width={50} />
                </span>
                <span className="genre">
                  <Skeleton width={50} />
                </span>
              </span>
            </h5>
            <div className="rating circleRating bg-transparent">
              <Skeleton circle={true} width={60} height={60} />
            </div>
          </div>
          <div className="movie-content-bottom">
            <ul>
              <li className="tag">
                <span className="p-0 bg-transparent tag-span">
                  <Skeleton width={30} />
                </span>
                <span className="p-0 bg-transparent tag-span">
                  <Skeleton width={30} />
                </span>
              </li>
              <li>
                <span className="like">
                  <Skeleton width={100} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default MovieCardSkeletonLoading;
