import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarcode,
  faBath,
  faBed,
  faBookmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const Brand = () => {
  return (
    <div>
      <section className="feature">
        <div className="container">
          <div className="row">
            <div
              className="col text-center"
              style={{ fontSize: 45, lineHeight: 3 }}
            >
              <h1 style={{ fontWeight: 700 }}>Featured properties</h1>
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
          <div className=" text-center">
            <button
              className="btn offer"
              style={{ fontSize: 14, lineHeight: 3 }}
            >
              Houses
            </button>
            <button
              className="btn offer"
              style={{ fontSize: 14, lineHeight: 3 }}
            >
              Smart home
            </button>
            <button
              className="btn offer"
              style={{ fontSize: 14, lineHeight: 3 }}
            >
              Apartments{" "}
            </button>
            <button
              className="btn offer"
              style={{ fontSize: 14, lineHeight: 3 }}
            >
              Office
            </button>
            <button
              className="btn offer"
              style={{ fontSize: 14, lineHeight: 3 }}
            >
              Villa
            </button>
            <button
              className="btn offer"
              style={{ fontSize: 14, lineHeight: 3 }}
            >
              Bungalow
            </button>
          </div>
        </div>
        <section className="product">
          <div className="container">
            <div className="row">
              <div className="col" style={{ position: "relative" }}>
                <div className="box">
                  <img src="https://media.istockphoto.com/id/1455781430/fr/photo/int%C3%A9rieur-de-salon-de-luxe-en-noir-et-bois-naturel-avec-boiseries-murales.webp?b=1&s=170667a&w=0&k=20&c=L0itKAsHXYcDXQQvKWF8n5Rssj2YrBpFNYIDKRqldzY=" />
                  <span className="spa">Featured</span>
                  <span className="spaend">For sale</span>
                  <span className="save">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      style={{ color: "#ffa920" }}
                    />
                  </span>
                  <h5 className="nameproduct pt-3" style={{ fontSize: 17 }}>
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
                    <div className="container pt-3">
                      <div className="row" style={{ marginLeft: "-25px" }}>
                        <div className="col">
                          <FontAwesomeIcon icon={faBed} /> <strong>4</strong>
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
                        <div className="col pt-5">
                          <p>
                            <strong>
                              <i
                                className="fa-solid fa-plus"
                                style={{ color: "#ffa920", fontSize: 9 }}
                              />{" "}
                              Compare
                            </strong>
                          </p>
                        </div>
                        <div className="col">
                          <img src="https://plus.unsplash.com/premium_photo-1686777542681-4362d1f96e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                        </div>
                        <div className="col pt-5">
                          <p>3 years ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" style={{ position: "relative" }}>
                <div className="box">
                  <img src="https://media.istockphoto.com/id/1488712055/fr/photo/salon-forest-house-de-style-asiatique.webp?b=1&s=170667a&w=0&k=20&c=Rfg2MAhhh0WIBU7zrExaOM8Xnl4UAihAhrYtejdyhZs=" />
                  <span className="spa">Featured</span>
                  <span className="spaend">For sale</span>
                  <span className="save">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      style={{ color: "#ffa920" }}
                    />
                  </span>
                  <h5 className="nameproduct pt-3" style={{ fontSize: 17 }}>
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
                    <div className="container pt-3">
                      <div className="row" style={{ marginLeft: "-25px" }}>
                        <div className="col">
                          <FontAwesomeIcon icon={faBed} /> <strong>4</strong>
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
                        <div className="col pt-5">
                          <p>
                            <strong>
                              <i
                                className="fa-solid fa-plus"
                                style={{ color: "#ffa920", fontSize: 9 }}
                              />{" "}
                              Compare
                            </strong>
                          </p>
                        </div>
                        <div className="col">
                          <img src="https://plus.unsplash.com/premium_photo-1686777542681-4362d1f96e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                        </div>
                        <div className="col pt-5">
                          <p>3 years ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" style={{ position: "relative" }}>
                <div className="box">
                  <img src="https://media.istockphoto.com/id/1500880326/fr/photo/int%C3%A9rieur-du-salon-avec-canap%C3%A9-blanc-et-table-basse-avec-d%C3%A9cor-lumi%C3%A8re-du-soleil-sur-mur.webp?b=1&s=170667a&w=0&k=20&c=cTRpIdHvmJ8aFzHBJYLUP37mA528tsnuzyjG8vo0Dx4=" />
                  <span className="spa">Featured</span>
                  <span className="spaend">For sale</span>
                  <span className="save">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      style={{ color: "#ffa920" }}
                    />
                  </span>
                  <h5 className="nameproduct pt-3" style={{ fontSize: 17 }}>
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
                    <div className="container pt-3">
                      <div className="row" style={{ marginLeft: "-25px" }}>
                        <div className="col">
                          <FontAwesomeIcon icon={faBed} /> <strong>4</strong>
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
                        <div className="col pt-5">
                          <p>
                            <strong>
                              <i
                                className="fa-solid fa-plus"
                                style={{ color: "#ffa920", fontSize: 9 }}
                              />{" "}
                              Compare
                            </strong>
                          </p>
                        </div>
                        <div className="col">
                          <img src="https://plus.unsplash.com/premium_photo-1686777542681-4362d1f96e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                        </div>
                        <div className="col pt-5">
                          <p>3 years ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" style={{ position: "relative" }}>
                <div className="box">
                  <img src="https://media.istockphoto.com/id/1406189828/fr/photo/accueil-int%C3%A9rieur-avec-pelouse-verte.webp?b=1&s=170667a&w=0&k=20&c=gEAukZEKFMqay06VphqYJSLj6I_cfVAKzZsVz9Ds3mQ=" />
                  <span className="spa">Featured</span>
                  <span className="spaend">For sale</span>
                  <span className="save">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      style={{ color: "#ffa920" }}
                    />
                  </span>
                  <h5 className="nameproduct pt-3" style={{ fontSize: 17 }}>
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
                    <div className="container pt-3">
                      <div className="row" style={{ marginLeft: "-25px" }}>
                        <div className="col">
                          <FontAwesomeIcon icon={faBed} /> <strong>4</strong>
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
                        <div className="col pt-5">
                          <p>
                            <strong>
                              <i
                                className="fa-solid fa-plus"
                                style={{ color: "#ffa920", fontSize: 9 }}
                              />{" "}
                              Compare
                            </strong>
                          </p>
                        </div>
                        <div className="col">
                          <img src="https://plus.unsplash.com/premium_photo-1686777542681-4362d1f96e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                        </div>
                        <div className="col pt-5">
                          <p>3 years ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col" style={{ position: "relative" }}>
                <div className="box">
                  <img src="https://media.istockphoto.com/id/1386040297/fr/photo/maquette-de-cadre-daffiche-en-arri%C3%A8re-plan-int%C3%A9rieur-moderne-salon-style-scandinave-rendu-3d.webp?b=1&s=170667a&w=0&k=20&c=RiNMtwxqjbcSlnfp74RlFKAz1Lsib9Fd-KelSzvGNb8=" />
                  <span className="spa">Featured</span>
                  <span className="spaend">For sale</span>
                  <span className="save">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      style={{ color: "#ffa920" }}
                    />
                  </span>
                  <h5 className="nameproduct pt-3" style={{ fontSize: 17 }}>
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
                    <div className="container pt-3">
                      <div className="row" style={{ marginLeft: "-25px" }}>
                        <div className="col">
                          <FontAwesomeIcon icon={faBed} /> <strong>4</strong>
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
                        <div className="col pt-5">
                          <p>
                            <strong>
                              <i
                                className="fa-solid fa-plus"
                                style={{ color: "#ffa920", fontSize: 9 }}
                              />{" "}
                              Compare
                            </strong>
                          </p>
                        </div>
                        <div className="col">
                          <img src="https://plus.unsplash.com/premium_photo-1686777542681-4362d1f96e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                        </div>
                        <div className="col pt-5">
                          <p>3 years ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" style={{ position: "relative" }}>
                <div className="box">
                  <img src="https://media.istockphoto.com/id/1733052267/fr/photo/design-de-commode-moderne.webp?b=1&s=170667a&w=0&k=20&c=otm0tfPO3A2-yQcaYWRN5DdcEcorLGlL5lOrcGOS9nI=" />
                  <span className="spa">Featured</span>
                  <span className="spaend">For sale</span>
                  <span className="save">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      style={{ color: "#ffa920" }}
                    />
                  </span>
                  <h5 className="nameproduct pt-3" style={{ fontSize: 17 }}>
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
                    <div className="container pt-3">
                      <div className="row" style={{ marginLeft: "-25px" }}>
                        <div className="col">
                          <FontAwesomeIcon icon={faBed} /> <strong>4</strong>
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
                        <div className="col pt-5">
                          <p>
                            <strong>
                              <i
                                className="fa-solid fa-plus"
                                style={{ color: "#ffa920", fontSize: 9 }}
                              />{" "}
                              Compare
                            </strong>
                          </p>
                        </div>
                        <div className="col">
                          <img src="https://plus.unsplash.com/premium_photo-1686777542681-4362d1f96e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                        </div>
                        <div className="col pt-5">
                          <p>3 years ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" style={{ position: "relative" }}>
                <div className="box">
                  <img src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                  <span className="spa">Featured</span>
                  <span className="spaend">For sale</span>
                  <span className="save">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      style={{ color: "#ffa920" }}
                    />
                  </span>
                  <h5 className="nameproduct pt-3" style={{ fontSize: 17 }}>
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
                    <div className="container pt-3">
                      <div className="row" style={{ marginLeft: "-25px" }}>
                        <div className="col">
                          <FontAwesomeIcon icon={faBed} /> <strong>4</strong>
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
                        <div className="col pt-5">
                          <p>
                            <strong>
                              <i
                                className="fa-solid fa-plus"
                                style={{ color: "#ffa920", fontSize: 9 }}
                              />{" "}
                              Compare
                            </strong>
                          </p>
                        </div>
                        <div className="col">
                          <img src="https://plus.unsplash.com/premium_photo-1686777542681-4362d1f96e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                        </div>
                        <div className="col pt-5">
                          <p>3 years ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" style={{ position: "relative" }}>
                <div className="box">
                  <img src="https://media.istockphoto.com/id/1446452511/fr/photo/design-int%C3%A9rieur-minimaliste-sur-fond-de-mur-vo%C3%BBt%C3%A9-concept-de-maquette-murale-rendu-3d.webp?b=1&s=170667a&w=0&k=20&c=A4M8ukjMeNdesc__t8XtUEPjKPSVg1BH-VT8fyPmN_8=" />
                  <span className="spa">Featured</span>
                  <span className="spaend">For sale</span>
                  <span className="save">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      style={{ color: "#ffa920" }}
                    />
                  </span>
                  <h5 className="nameproduct pt-3" style={{ fontSize: 17 }}>
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
                    <div className="container pt-3">
                      <div className="row" style={{ marginLeft: "-25px" }}>
                        <div className="col">
                          <FontAwesomeIcon icon={faBed} /> <strong>4</strong>
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
                        <div className="col pt-5">
                          <p>
                            <strong>
                              <i
                                className="fa-solid fa-plus"
                                style={{ color: "#ffa920", fontSize: 9 }}
                              />{" "}
                              Compare
                            </strong>
                          </p>
                        </div>
                        <div className="col">
                          <img src="https://plus.unsplash.com/premium_photo-1686777542681-4362d1f96e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
                        </div>
                        <div className="col pt-5">
                          <p>3 years ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col text-center"
                style={{ fontSize: 45, lineHeight: 5 }}
              >
                <h1 style={{ fontWeight: 700 }}>Search real estate by area</h1>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 3,
                    color: "#8E8E93",
                  }}
                >
                  Find your dream apartment with our listing
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="wrap-search">
            <div className="area">
              <div className="map">
                <img
                  src="https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide 1"
                />
              </div>
              <div className="map">
                <img
                  src="https://images.unsplash.com/photo-1682687981974-c5ef2111640c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                  alt="Slide 2"
                />
              </div>
              <div className="map">
                <img
                  src="https://images.unsplash.com/photo-1706125356820-e6f5a81bcc83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
                  alt="Slide 3"
                />
              </div>
              <div className="map">
                <img
                  src="https://images.unsplash.com/photo-1682685797886-79020b7462a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide 3"
                />
              </div>
            </div>
            <div className="area">
              <div className="map">
                <img src="https://images.unsplash.com/photo-1705959708017-fa4400b1c8a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div className="map">
                <img
                  src="https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide 2"
                />
              </div>
              <div className="map">
                <img
                  src="https://plus.unsplash.com/premium_photo-1705418057300-84235e5f265a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide 3"
                />
              </div>
              <div className="map">
                <img
                  src="https://images.unsplash.com/photo-1705522369595-40d0b2667739?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjZ8fHxlbnwwfHx8fHw%3D"
                  alt="Slide 3"
                />
              </div>
            </div>
          </div>
        </section>
        {/* -------------------------------------------------------------------Sale---------------------------------------------------------- */}
        <section className="sale">
          <div className="container">
            <div className="row">
              <div
                className="col text-center pt-5 pb-5"
                style={{ fontSize: 45, lineHeight: 54 }}
              >
                <h1 style={{ fontWeight: 700 }}>Properties for sale</h1>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: 3,
                    color: "#8E8E93",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel lobortis justo
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
                            <img src="https://media.istockphoto.com/id/1442114044/fr/photo/fauteuil-en-cuir-en-daim-marron-table-dappoint-en-laiton-et-armoire-en-bois-vert-pastel-dans.webp?b=1&s=170667a&w=0&k=20&c=rFXYKkLpAr1DzP6eNFAoxK1v1dOru-YXClkgTM6RA1A=" />
                            <span className="spa">Featured</span>
                            <span className="spaend">For sale</span>
                            <span className="save">
                              <FontAwesomeIcon
                                icon={faBookmark}
                                style={{ color: "#ffa920" }}
                              />
                            </span>
                            <h5
                              className="nameproduct "
                              style={{ fontSize: 17 }}
                            >
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
                            <img src="https://media.istockphoto.com/id/1149521093/fr/photo/int%C3%A9rieurs-dun-salon.webp?b=1&s=170667a&w=0&k=20&c=cFZHx3Ifl34RPQP4z4E2YtnB2AREhlCXsqeIlznB_nw=" />
                            <span className="spa">Featured</span>
                            <span className="spaend">For sale</span>
                            <span className="save">
                              <FontAwesomeIcon
                                icon={faBookmark}
                                style={{ color: "#ffa920" }}
                              />
                            </span>
                            <h5
                              className="nameproduct "
                              style={{ fontSize: 17 }}
                            >
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
                            <img src="https://media.istockphoto.com/id/1442113721/fr/photo/canap%C3%A9-en-tissu-blanc-plante-de-figuier-en-feuilles-bureau-et-chaise-en-bois-dans-un-mur.webp?b=1&s=170667a&w=0&k=20&c=UwJwIdznV5JXxJaJzJ-iQWlAVfxQ6DxienXXUQvWpws=" />
                            <span className="spa">Featured</span>
                            <span className="spaend">For sale</span>
                            <span className="save">
                              <FontAwesomeIcon
                                icon={faBookmark}
                                style={{ color: "#ffa920" }}
                              />
                            </span>
                            <h5
                              className="nameproduct "
                              style={{ fontSize: 17 }}
                            >
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
        <div className="dots-container1" id="dots1" />
      </section>
      {/* --------------------------------------------------------slide-------------------------------------------------------- */}
      <section className="product">
        <div className="container"></div>
      </section>
    </div>
  );
};
export default Brand;
