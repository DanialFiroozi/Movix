import { Link } from "react-router-dom";
import slider_img02 from "/src/assets/img/banner/slider_img02.jpg";

function JumbotronSection() {
  return (
    <section class="slider-area slider-bg">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-0 order-lg-2">
            <div
              class="slider-img text-center text-lg-right"
              data-animation="fadeInRight"
              data-delay="1s"
            >
              <img src={slider_img02} alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="banner-content">
              <h6 class="sub-title">Movflx</h6>
              <h2 class="title">
                Unlimited <span>Movie</span>, TV Shows, & More.
              </h2>
              <div class="banner-meta">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus dignissimos, ut temporibus accusamus maiores illo
                  laboriosam deserunt consectetur dolor nemo.
                </span>
              </div>
              <Link className="banner-btn btn popup-video">
                <i class="fas fa-play"></i> Watch Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JumbotronSection;
