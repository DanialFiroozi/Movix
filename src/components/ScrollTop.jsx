import { useEffect, useState } from "react";

function ScrollTop() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <button
      className={`scroll-top scroll-to-target ${scroll && "open"}`}
      onClick={scrollTop}
    >
      <i className="fas fa-angle-up"></i>
    </button>
  );
}

export default ScrollTop;
