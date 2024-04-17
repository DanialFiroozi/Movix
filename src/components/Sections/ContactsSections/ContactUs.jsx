import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function ContactUs() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <section className="contact-area contact-bg pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="contact-form-wrap">
                <div className="widget-title mb-50">
                  <h5 className="title">Contact Form</h5>
                </div>
                <div className="contact-form">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" placeholder="You Name *" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" placeholder="You  Email *" />
                      </div>
                    </div>
                    <input type="text" placeholder="Subject *" />
                    <textarea
                      name="message"
                      placeholder="Type Your Message..."
                    ></textarea>
                    <button className="btn">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="widget-title mb-50">
                <h5 className="title">Information</h5>
              </div>
              <div className="contact-info-wrap">
                <p>
                  <span>Find solutions :</span> to common problems, or get help
                  from a support agent industry's standard .
                </p>
                <div className="contact-info-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <p>
                        <span>Address :</span> W38 Park Road New York
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <p>
                        <span>Phone :</span> (09) 123 854 365
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <p>
                        <span>Email :</span> support@movflx.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "500px", marginTop: "10rem" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
