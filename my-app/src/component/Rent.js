import React from "react";
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarcode,
  faBath,
  faBed,
  faBookmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const Rent = () => {
  return (
    <section className="sale py-5" style={{ backgroundColor: "#f5e7f4" }}>
      <div className="container">
        <div className="row">
          <div
            className="col text-center pt-5 pb-5"
            style={{ fontSize: 45, lineHeight: 54 }}
          >
            <h1 style={{ fontWeight: 700 }}>Properties for rent</h1>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 3,
                color: "#8E8E93",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel lobortis justo
            </p>
          </div>
        </div>
        <div className style={{ paddingLeft: 150 }}>
          <div className="slider-container2">
            <div className="slider-content2">
              <section className="product pt-5">
                <div className="container">
                  <div className="row">
                    <div className="col" style={{ position: "relative" }}>
                      <div className="box">
                        <img src="https://media.istockphoto.com/id/1386471399/fr/photo/int%C3%A9rieur-moderne-de-salle-de-vie-rendu-3d.webp?b=1&s=170667a&w=0&k=20&c=Tw6rBD64fB3dEOHZTsb7rre16pHa92dAHAosiBtyMDg=" />
                        <span className="spa">Featured</span>
                        <span className="spaend">For sale</span>
                        <span className="save">
                          <FontAwesomeIcon
                            icon={faBookmark}
                            style={{ color: "#ffa920" }}
                          />
                        </span>
                        <h5 className="nameproduct " style={{ fontSize: 17 }}>
                          <a>Gorgeous Apartment Building</a>
                        </h5>
                        <div className="text-address">
                          <p>
                            <FontAwesomeIcon
                              icon={faBarcode}
                              style={{ color: "#8E8E93" }}
                            />{" "}
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                          <a className="price">$7,500</a>
                          <div className="container ">
                            <div
                              className="row"
                              style={{ marginLeft: "-25px" }}
                            >
                              <div className="col">
                                <FontAwesomeIcon icon={faBed} /> Beds:{" "}
                                <strong>4</strong>
                              </div>
                              <div className="col">
                                <FontAwesomeIcon icon={faBath} /> Baths:{" "}
                                <strong>2</strong>
                              </div>
                              <div className="col">
                                <FontAwesomeIcon icon={faHeart} /> Sqft:{" "}
                                <strong>1150</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="author border-top">
                          <div className="container">
                            <div className="row ">
                              <div className="col ">
                                <p>
                                  <strong>
                                    <i
                                      className="fa-solid fa-plus"
                                      style={{
                                        color: "#ffa920",
                                        fontSize: 9,
                                      }}
                                    />{" "}
                                    Compare
                                  </strong>
                                </p>
                              </div>
                              <div className="col">
                                <img src="https://plus.unsplash.com/premium_photo-1686777542681-4362d1f96e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                              </div>
                              <div className="col ">
                                <p>3 years ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col" style={{ position: "relative" }}>
                      <div className="box">
                        <img src="https://media.istockphoto.com/id/1447133263/fr/photo/design-int%C3%A9rieur-du-salon-avec-table-basse-et-fauteuil-vert-maquette-daffiche-au-mur.webp?b=1&s=170667a&w=0&k=20&c=JyA3fsB-iSVDicPHU_64znf8JrXDW6NPC4TCxk21QGI=" />
                        <span className="spa">Featured</span>
                        <span className="save">
                          <FontAwesomeIcon
                            icon={faBookmark}
                            style={{ color: "#ffa920" }}
                          />
                        </span>
                        <h5 className="nameproduct " style={{ fontSize: 17 }}>
                          <a>Gorgeous Apartment Building</a>
                        </h5>
                        <div className="text-address">
                          <p>
                            <FontAwesomeIcon
                              icon={faBarcode}
                              style={{ color: "#8E8E93" }}
                            />{" "}
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                          <a className="price">$7,500</a>
                          <div className="container ">
                            <div
                              className="row"
                              style={{ marginLeft: "-25px" }}
                            >
                              <div className="col">
                                <FontAwesomeIcon icon={faBed} /> Beds:{" "}
                                <strong>4</strong>
                              </div>
                              <div className="col">
                                <FontAwesomeIcon icon={faBath} /> Baths:{" "}
                                <strong>2</strong>
                              </div>
                              <div className="col">
                                <FontAwesomeIcon icon={faHeart} /> Sqft:{" "}
                                <strong>1150</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="author border-top">
                          <div className="container">
                            <div className="row ">
                              <div className="col ">
                                <p>
                                  <strong>
                                    <i
                                      className="fa-solid fa-plus"
                                      style={{
                                        color: "#ffa920",
                                        fontSize: 9,
                                      }}
                                    />{" "}
                                    Compare
                                  </strong>
                                </p>
                              </div>
                              <div className="col">
                                <img src="https://plus.unsplash.com/premium_photo-1686777542681-4362d1f96e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                              </div>
                              <div className="col ">
                                <p>3 years ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col" style={{ position: "relative" }}>
                      <div className="box">
                        <img src="https://media.istockphoto.com/id/1468455696/fr/photo/luxe-contemporain-couloir-de-maison-spacieuse-%C3%A0-travers-le-salon-avec-un-grand-mur-de-verre.webp?b=1&s=170667a&w=0&k=20&c=Ajeaim3W1-itbuXP2QhAnZpnrs3wBF3N6JJPsK_6jmU=" />
                        <span className="spa">Featured</span>
                        <span className="spaend">For sale</span>
                        <span className="save">
                          <FontAwesomeIcon
                            icon={faBookmark}
                            style={{ color: "#ffa920" }}
                          />
                        </span>
                        <h5 className="nameproduct " style={{ fontSize: 17 }}>
                          <a>Gorgeous Apartment Building</a>
                        </h5>
                        <div className="text-address">
                          <p>
                            <FontAwesomeIcon
                              icon={faBarcode}
                              style={{ color: "#8E8E93" }}
                            />{" "}
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                          <a className="price">$7,500</a>
                          <div className="container ">
                            <div
                              className="row"
                              style={{ marginLeft: "-25px" }}
                            >
                              <div className="col">
                                <FontAwesomeIcon icon={faBed} /> Beds:{" "}
                                <strong>4</strong>
                              </div>
                              <div className="col">
                                <FontAwesomeIcon icon={faBath} /> Baths:{" "}
                                <strong>2</strong>
                              </div>
                              <div className="col">
                                <FontAwesomeIcon icon={faHeart} /> Sqft:{" "}
                                <strong>1150</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="author border-top">
                          <div className="container">
                            <div className="row ">
                              <div className="col ">
                                <p>
                                  <strong>
                                    <i
                                      className="fa-solid fa-plus"
                                      style={{
                                        color: "#ffa920",
                                        fontSize: 9,
                                      }}
                                    />{" "}
                                    Compare
                                  </strong>
                                </p>
                              </div>
                              <div className="col">
                                <img src="https://plus.unsplash.com/premium_photo-1686777542681-4362d1f96e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                              </div>
                              <div className="col ">
                                <p>3 years ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rent;
