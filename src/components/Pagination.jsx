import { Link } from "react-router-dom";

function Pagination() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="pagination-wrap mt-30">
          <nav>
            <ul>
              <li>
                <Link to="/">Prev</Link>
              </li>
              <li className="active">
                <Link to="/">1</Link>
              </li>
              <li>
                <Link to="/">2</Link>
              </li>
              <li>
                <Link to="/">3</Link>
              </li>
              <li>
                <Link to="/">4</Link>
              </li>
              <li>
                <Link to="/">Next</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
