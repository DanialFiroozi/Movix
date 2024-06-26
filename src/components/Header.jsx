import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import logo from "/src/assets/img/logo/logo.png";

function Header() {
  const [showMenu, setShowMenu] = useState("");
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";
  const transparentHeader = pathname !== "/" && "transparent-header";

  const navItems = [
    { link: "/", title: "home" },
    { link: "/movies", title: "movie" },
    { link: "/pricing", title: "pricing" },
    { link: "/contacts", title: "contacts" },
  ];

  return (
    <header className="header-style-two">
      <div className={`header-top-wrap ${!isHomePage && "d-none"}`}>
        <div className="container custom-container">
          <div className="row align-items-center">
            <div className="col-md-6 d-none d-md-block">
              <div className="header-top-subs">
                <p>
                  Movflx One Month Free <span>Subscription !</span>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-top-link">
                <ul className="quick-link">
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">FAQS</Link>
                  </li>
                </ul>
                <ul className="header-social">
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
                      <i className="fab fa-vimeo-v"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-dribbble"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sticky-header" className={`menu-area ${transparentHeader}`}>
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div
                className="mobile-nav-toggler"
                onClick={() => setShowMenu("show-menu")}
              >
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav show">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      {navItems.map((item, index) => {
                        return (
                          <li
                            className={`${pathname === item.link && "active"}`}
                            key={index}
                          >
                            <Link to={item.link}>{item.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul>
                      <li className="d-none d-xl-block">
                        <div className="footer-search">
                          <form action="#">
                            <input
                              type="text"
                              placeholder="Find Favorite Movie"
                            />
                            <button>
                              <i className="fas fa-search"></i>
                            </button>
                          </form>
                        </div>
                      </li>
                      <li className="header-btn">
                        <Link to="/" className="btn">
                          Sign In
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className={`mobile-menu ${showMenu}`}>
                <div className="close-btn" onClick={() => setShowMenu("")}>
                  <i className="fas fa-times"></i>
                </div>

                <nav className="menu-box">
                  <div className="nav-logo">
                    <Link to="/">
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                  <div className="menu-outer">
                    <ul id="menu-main-menu" className="navigation">
                      {navItems.map((item, index) => {
                        return (
                          <li
                            className={`${pathname === item.link && "active"}`}
                            key={index}
                          >
                            <Link to={item.link} className="navLink">
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="social-links">
                    <ul className="clearfix">
                      <li>
                        <Link to="/">
                          <span className="fab fa-twitter"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span className="fab fa-facebook-square"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span className="fab fa-pinterest-p"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span className="fab fa-instagram"></span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span className="fab fa-youtube"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
