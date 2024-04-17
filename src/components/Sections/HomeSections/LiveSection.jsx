import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Odometer from "react-odometerjs";

import "odometer/themes/odometer-theme-default.css";

import live_img from "/src/assets/img/images/live_img.png";

function LiveSection() {
  const [value, setValue] = useState(0);

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);

        isVisible && setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => setValue(42), 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="live-area live-bg fix" ref={elementRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="section-title title-style-two mb-25">
              <span className="sub-title">ONLINE STREAMING</span>
              <h2 className="title">
                Live Movie & TV Shows For Friends & Family
              </h2>
            </div>
            <div className="live-movie-content">
              <p>
                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                eiusmod There are many variations of passages of lorem Ipsum
                available, but the majority have suffered alteration.
              </p>
              <div className="live-fact-wrap">
                <div className="resolution">
                  <h2>HD 4K</h2>
                </div>
                <div className="active-customer">
                  <h4>
                    {<Odometer value={value} />}
                    K+
                  </h4>
                  <p>Active Customer</p>
                </div>
              </div>
              <Link
                to="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                className="btn popup-video"
              >
                <i className="fas fa-play"></i> Watch Now
              </Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="live-movie-img">
              <img src={live_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveSection;
