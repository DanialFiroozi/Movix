import { Link } from "react-router-dom";

function Pricing({
  type,
  price,
  period,
  quality,
  resulation,
  screens,
  isActive,
}) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8">
      <div className={`pricing-box-item mb-30 ${isActive}`}>
        <div className="pricing-top">
          <h6>{type}</h6>
          <div className="price">
            <h3>{price}</h3>
            <span>{period}</span>
          </div>
        </div>
        <div className="pricing-list">
          <ul>
            <li className="quality">
              <i className="fas fa-check"></i> Video quality{" "}
              <span>{quality}</span>
            </li>
            <li>
              <i className="fas fa-check"></i> Resolution{" "}
              <span>{resulation}</span>
            </li>
            <li>
              <i className="fas fa-check"></i> Screens you can watch{" "}
              <span>{screens}</span>
            </li>
            <li>
              <i className="fas fa-check"></i> Cancel anytime
            </li>
          </ul>
        </div>
        <div className="pricing-btn">
          <Link to="#" className="btn">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
