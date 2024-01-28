import React from "react";
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHouse,
  faChevronCircleRight,
  faPhoneVolume,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInvision,
  faTwitter,
  faInstagram,
  faArrowRight,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section
      className="footer pb-5 pt-5"
      style={{ backgroundColor: "black", position: "relative" }}
    >
      <div className="container pt-5 pb-5">
        <div className="row align-items-start d-flex">
          <div
            className="col-5"
            style={{
              borderRadius: 10,
              backgroundColor: "#FFF5E0",
              position: "relative",
              left: 80,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-3 pt-2">
                  <img
                    src="https://preview.free3d.com/img/2015/10/2212620326200674180/a5fnusz4.jpg"
                    style={{ width: 100 }}
                  />
                </div>
                <div className="col pb-3">
                  <h1 className="pt-2">You need a house</h1>
                  <p>
                    Tell us your needs, we will give you thousands of
                    suggestions for the dream home.
                  </p>
                </div>
              </div>
            </div>
            <div className="position-absolute top-100 start-50 translate-middle">
              <button
                className="btn"
                style={{ backgroundColor: "#ffa920", color: "white" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-3 border-end">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="col" style={{ fontWeight: 600 }}>
                      Contact selle
                    </div>
                  </div>
                </div>
                <div />
              </button>
            </div>
          </div>
          <div
            className="col-5"
            style={{
              borderRadius: 10,
              backgroundColor: "#FFF5E0",
              position: "relative",
              left: 100,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-3 pt-2">
                  <img
                    src="https://p.turbosquid.com/ts-thumb/mU/DBjSlZ/8f/signator0/png/1672813936/300x300/sharp_fit_q85/644666c3ddcf6491f102341f6b99b5b215de711e/signator0.jpg"
                    style={{ width: 100 }}
                  />
                </div>
                <div className="col pb-3">
                  <h1 className="pt-2">Sell your house</h1>
                  <p>
                    We will connect you to thousands of people who need to buy a
                    home.
                  </p>
                </div>
              </div>
            </div>
            <div className="position-absolute top-100 start-50 translate-middle">
              <button
                className="btn"
                style={{ backgroundColor: "#ffa920", color: "white" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-3 border-end">
                      <FontAwesomeIcon icon={faHouse} />
                    </div>
                    <div className="col" style={{ fontWeight: 600 }}>
                      Sell property
                    </div>
                  </div>
                </div>
                <div />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="info pt-5" pb-5>
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>Office Address</h2>
                <h5>Head office:</h5>
                <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                <h5>Branch:</h5>
                <p>3891 Ranchview Dr. Richardson, California 62639</p>
                <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
              </div>
              <div className="col">
                <div className="container">
                  <h2>Contact Seller</h2>
                  <div className="row">
                    <div className="col-4">
                      <img
                        src="https://nads.1cdn.vn/2012/03/10/vapa.org.vn-uploads-image-haiyen-_ll1_1.jpg"
                        style={{ width: 50, height: 50, borderRadius: "100%" }}
                      />
                    </div>
                    <div className="col-8">
                      <h5>Darrell Steward</h5>
                      <p>(405) 555-0128</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <FontAwesomeIcon
                        icon={faPhoneVolume}
                        style={{ fontSize: 40, color: "#8e8e8e" }}
                      />
                    </div>
                    <div className="col-8">
                      <h5>Hotline:</h5>
                      <p>(201) 555-0124</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <FontAwesomeIcon
                        icon={faEnvelopeOpen}
                        style={{ fontSize: 40, color: "#8e8e8e" }}
                      />
                    </div>
                    <div className="col-8">
                      <h5>Darrell Steward</h5>
                      <p>(405) 555-0128</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="container">
                  <h2>Our Company</h2>
                  <div className="row">
                    <div className="col-1">
                      <FontAwesomeIcon
                        icon={faChevronCircleRight}
                        style={{ color: "#ffa920" }}
                      />
                    </div>
                    <div className="col-11">
                      <h5>Property For Sale</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <FontAwesomeIcon
                        icon={faChevronCircleRight}
                        style={{ color: "#ffa920" }}
                      />
                    </div>
                    <div className="col-11">
                      <h5>About Us</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <FontAwesomeIcon
                        icon={faChevronCircleRight}
                        style={{ color: "#ffa920" }}
                      />
                    </div>
                    <div className="col-11">
                      <h5>Our Agents</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <FontAwesomeIcon
                        icon={faChevronCircleRight}
                        style={{ color: "#ffa920" }}
                      />
                    </div>
                    <div className="col-11">
                      <h5>FAQ</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <FontAwesomeIcon
                        icon={faChevronCircleRight}
                        style={{ color: "#ffa920" }}
                      />
                    </div>
                    <div className="col-11">
                      <h5>Pricing</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <FontAwesomeIcon
                        icon={faChevronCircleRight}
                        style={{ color: "#ffa920" }}
                      />
                    </div>
                    <div className="col-11">
                      <h5>Contact Us</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <h2>Newsletter</h2>
                <p>Sign up to receive the latest articles</p>
                <div className="pb-3">
                  {" "}
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Your email address"
                    style={{ width: 240, height: 50 }}
                  />
                </div>
                <div className="btn2">
                  <button
                    className="btn"
                    style={{ width: 240, paddingTop: 13 }}
                  >
                    <p>
                      Sign Up <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                    </p>
                  </button>
                </div>
                <div className="form- pt-2 pb-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                    style={{ fontSize: 10, color: "white" }}
                  >
                    i have read and agree to the terms &amp; conditions
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="menufoot border-top border-bottom pt-5">
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="container">
                  <div className="row">
                    <div className="col-3">
                      <FontAwesomeIcon
                        icon={faHouse}
                        style={{ fontSize: "50" }}
                      />
                    </div>
                    <div className="col pb-3">
                      <h5>Dream Home</h5>
                      <p>Real Estate</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="row">
                  <div className="col">
                    <a href="#">Home</a>
                  </div>
                  <div className="col">
                    <a href="#">Property</a>
                  </div>
                  <div className="col">
                    <a href="#">Agents</a>
                  </div>
                  <div className="col">
                    <a href="#">Blog</a>
                  </div>
                  <div className="col">
                    <a href="#">Contact</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <div className="bd">
                      <FontAwesomeIcon icon={faFacebook} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="bd">
                      <FontAwesomeIcon icon={faInvision} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="bd">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="bd">
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pt-5" style={{ textAlign: "center" }}>
          <h5
            style={{
              fontWeight: 400,
              fontSize: 20,
              lineHeight: 3,
              color: "#616163",
            }}
          >
            Copyright © 2023. Designed &amp; Developed by{" "}
            <a style={{ fontWeight: 700, color: "white" }}>Themesflat</a>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Footer;
