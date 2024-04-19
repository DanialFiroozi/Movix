import { Link } from "react-router-dom";

import logo from "/src/assets/img/logo/logo.png";
import card_img from "/src/assets/img/images/card_img.png";

function Footer() {
  return (
    <footer>
      <div className="footer-top-wrap">
        <div className="container">
          <div className="footer-menu-wrap">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="footer-menu">
                  <nav>
                    <ul className="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/movies">Movie</Link>
                      </li>
                      <li>
                        <Link to="/movies">tv show</Link>
                      </li>
                      <li>
                        <Link to="/pricing">Pricing</Link>
                      </li>
                    </ul>
                    <div className="footer-search">
                      <form action="#">
                        <input type="text" placeholder="Find Favorite Movie" />
                        <button>
                          <i className="fas fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-quick-link-wrap">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="quick-link-list">
                  <ul>
                    <li>
                      <Link to="/">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/">Help Center</Link>
                    </li>
                    <li>
                      <Link to="/">Terms of Use</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="footer-social">
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2021. All Rights Reserved By{" "}
                  <Link to="index.html">Movflx</Link>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="payment-method-img text-center text-md-right">
                <img src={card_img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
