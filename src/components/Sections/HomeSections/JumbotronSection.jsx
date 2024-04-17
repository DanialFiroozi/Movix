import { Link } from "react-router-dom";
import slider_img02 from "/src/assets/img/banner/slider_img02.jpg";

function JumbotronSection() {
  return (
    <section className="slider-area slider-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div
              className="slider-img text-center text-lg-right"
              data-animation="fadeInRight"
              data-delay="1s"
            >
              <img src={slider_img02} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-content">
              <h6 className="sub-title">Movflx</h6>
              <h2 className="title">
                Unlimited <span>Movie</span>, TV Shows, & More.
              </h2>
              <div className="banner-meta">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus dignissimos, ut temporibus accusamus maiores illo
                  laboriosam deserunt consectetur dolor nemo.
                </span>
              </div>
              <Link className="banner-btn btn popup-video">
                <i className="fas fa-play"></i> Watch Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JumbotronSection;
