import React from "react";
import SectionTitle from "../SectionTitle";
import Pricing from "../Pricing";

function PricingSection() {
  return (
    <section
      className="pricing-area pricing-bg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <SectionTitle
              subTitle="our pricing plans"
              title="Our Pricing Strategy"
              additionalClass="mb-70"
            />
          </div>
        </div>
        <div className="pricing-box-wrap">
          <div className="row justify-content-center">
            <Pricing
              type="premium"
              price="$7.99"
              period="Monthly"
              quality="Good"
              resulation="480p"
              screens="1"
            />
            <Pricing
              isActive="active"
              type="standard"
              price="$9.99"
              period="Monthly"
              quality="Better"
              resulation="1080p"
              screens="2"
            />
            <Pricing
              type="premium"
              price="$11.99"
              period="Monthly"
              quality="Best"
              resulation="4K+HDR"
              screens="5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
