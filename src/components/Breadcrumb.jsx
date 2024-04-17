import { Link, useLocation } from "react-router-dom";

function Breadcrumb({ title }) {
  const { pathname } = useLocation();
  const currPage = pathname.split("/")[1];

  return (
    <section className="breadcrumb-area breadcrumb-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="title">{title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">{currPage}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
