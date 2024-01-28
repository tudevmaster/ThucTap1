import React from "react";
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";
const Happy = () => {
  return (
    <section className="happy pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div
            className="col text-center pt-5 pb-5"
            style={{ fontSize: 45, lineHeight: 54 }}
          >
            <h1 style={{ fontWeight: 700 }}>From our happy customers</h1>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 3,
                color: "#8E8E93",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              tristique metus proin id lorem odio
            </p>
          </div>
        </div>
        <div className style={{ paddingLeft: 150 }}>
          <div className="slider-container2">
            <div className="slider-content2">
              <section className="product pt-5">
                <div className="container">
                  <div className="row">
                    <div
                      className="col"
                      style={{ position: "relative", textAlign: "center" }}
                    >
                      <div className="box">
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{ color: "#ffa920", fontSize: 30 }}
                        />

                        <p>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce sed tristique metus proin id lorem odio
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce sed tristique metus proin id lorem odio"
                        </p>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-lkijlO0g1F6MHKlfo2erxZ-z8FSlzTHRA&usqp=CAU"
                          style={{ width: 90, height: 90 }}
                        />
                        <p style={{ fontWeight: 700 }}>TusDang</p>
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 400,
                            color: "#8E8E93",
                          }}
                        >
                          Internet security
                        </p>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{ position: "relative", textAlign: "center" }}
                    >
                      <div className="box">
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{ color: "#ffa920", fontSize: 30 }}
                        />
                        <p>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce sed tristique metus proin id lorem odio
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce sed tristique metus proin id lorem odio"
                        </p>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-lkijlO0g1F6MHKlfo2erxZ-z8FSlzTHRA&usqp=CAU"
                          style={{ width: 90, height: 90 }}
                        />
                        <p style={{ fontWeight: 700 }}>TusDang</p>
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 400,
                            color: "#8E8E93",
                          }}
                        >
                          Internet security
                        </p>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{ position: "relative", textAlign: "center" }}
                    >
                      <div className="box">
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{ color: "#ffa920", fontSize: 30 }}
                        />
                        <p>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce sed tristique metus proin id lorem odio
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce sed tristique metus proin id lorem odio"
                        </p>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-lkijlO0g1F6MHKlfo2erxZ-z8FSlzTHRA&usqp=CAU"
                          style={{ width: 90, height: 90 }}
                        />
                        <p style={{ fontWeight: 700 }}>TusDang</p>
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 400,
                            color: "#8E8E93",
                          }}
                        >
                          Internet security
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "center", fontWeight: 400 }}>
                  Become our next customer, and find your dream home
                  <a
                    className="text-end"
                    style={{ color: "#ffa920", textDecoration: "none" }}
                  >
                    Contact us: 314-555-0123
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Happy;
