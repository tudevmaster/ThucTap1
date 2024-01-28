import React from "react";
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEnvelope,
  faHouse,
  faMap,
  faPhone,
  faPhoneVolume,
  faPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Agent = () => {
  return (
    <div>
      <section className="sale py-5">
        <div className="container">
          <div className="row">
            <div
              className="col text-center pt-5 pb-5"
              style={{ fontSize: 45, lineHeight: 54 }}
            >
              <h1 style={{ fontWeight: 700 }}>Meet the agents</h1>
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
        </div>
        <section className>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card border-light" style={{ width: "20rem" }}>
                  <img src="https://img.freepik.com/fotos-premium/ein-mann-sitzt-an-einem-tisch-in-einem-dunklen-buero-und-arbeitet-an-einem-laptop_713888-5468.jpg" />
                  <div className="card-body">
                    <h5 className="card-title">
                      <div className="container">
                        <div className="row">
                          <div className="col-8">
                            <div className="name">Wade Warren</div>
                          </div>
                          <div className="col-2 ">
                            <div className="phone-icon">
                              <FontAwesomeIcon icon={faPhone} />
                            </div>
                          </div>
                          <div className="col-2 ">
                            <div className="phone-icon">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </h5>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 400,
                        lineHeight: 2,
                        color: "#8E8E93",
                      }}
                    >
                      Salesperson
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-light" style={{ width: "20rem" }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbi4IkgYANLX9qiNKRmTbGKytYto9oRJQQOg&usqp=CAU"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <div className="container">
                        <div className="row">
                          <div className="col-8">
                            <div className="name">Leslie Alexander</div>
                          </div>
                          <div className="col-2 ">
                            <div className="phone-icon">
                              <FontAwesomeIcon icon={faPhone} />
                            </div>
                          </div>
                          <div className="col-2 ">
                            <div className="phone-icon">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </h5>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 400,
                        lineHeight: 2,
                        color: "#8E8E93",
                      }}
                    >
                      Commercial Broker
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-light" style={{ width: "20rem" }}>
                  <img
                    src="https://cdn.mos.cms.futurecdn.net/2PPVKku7ig9MCBu39qAijD.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <div className="container">
                        <div className="row">
                          <div className="col-8">
                            <div className="name">Darlene Robertson</div>
                          </div>
                          <div className="col-2 ">
                            <div className="phone-icon">
                              <FontAwesomeIcon icon={faPhone} />
                            </div>
                          </div>
                          <div className="col-2 ">
                            <div className="phone-icon">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </h5>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 400,
                        lineHeight: 2,
                        color: "#8E8E93",
                      }}
                    >
                      Realtor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="from">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="provide">
                We provide the most suitable and quality real estate.
              </h1>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  lineHeight: 2,
                  color: "#8E8E93",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed tristique metus proin id lorem odio
              </p>
              <div className="container">
                <div className="row">
                  <div className="col-2">
                    <FontAwesomeIcon
                      icon={faMap}
                      style={{ color: "#b4acac", fontSize: 30 }}
                    />
                  </div>
                  <div className="col-7">
                    <h5 className="text-color1">office address</h5>
                    <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-2">
                    <FontAwesomeIcon
                      icon={faPhoneVolume}
                      style={{ color: "#b4acac", fontSize: 30 }}
                    />
                  </div>
                  <div className="col-7">
                    <h5 className="text-color1">Request a call back</h5>
                    <p
                      style={{
                        color: "#ffa920 !important",
                        fontWeight: 800,
                        lineHeight: 1,
                        fontSize: 30,
                      }}
                    >
                      314-555-0123
                    </p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: "#b4acac", fontSize: 30 }}
                    />
                  </div>
                  <div className="col-7">
                    <h5 className="text-color1">Email us</h5>
                    <p style={{ color: "#ffa920" }}>hellosupport@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------------------------Form------------------------------------------------ */}
            <div className="col pb-5">
              <div className="card" style={{ width: "35rem" }}>
                <form
                  className="formright"
                  style={{ paddingLeft: 20, paddingTop: 10 }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-8">
                        <h1 className="contact">Contact us</h1>
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            lineHeight: 2,
                            color: "#8E8E93",
                          }}
                        >
                          We will respond as soon as we receive your message.
                        </p>
                      </div>
                      <div className="col-2 pt-3">
                        <FontAwesomeIcon
                          icon={faComment}
                          style={{ color: "#ffa920", fontSize: "30" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your name</label>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon3">
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{ color: "#ffa920" }}
                        />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                      />
                    </div>
                  </div>
                  <div className="container mb-3">
                    <div className="row">
                      <div className="col" style={{ paddingLeft: 0 }}>
                        {" "}
                        <div className="mb-3">
                          <label className="form-label">Your name</label>
                          <div className="input-group mb-3">
                            <span
                              className="input-group-text"
                              id="basic-addon3"
                            >
                              <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{ color: "#ffa920" }}
                              />
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              id="basic-url"
                              aria-describedby="basic-addon3"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        {" "}
                        <div className="mb-3">
                          <label className="form-label">Phone</label>
                          <div className="input-group mb-3">
                            <span
                              className="input-group-text"
                              id="basic-addon3"
                            >
                              <FontAwesomeIcon
                                icon={faPhone}
                                style={{ color: "#ffa920" }}
                              />
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              id="basic-url"
                              aria-describedby="basic-addon3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="pb-2">Property type</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected> Choose</option>
                      <option value={1}>Apartment</option>
                      <option value={2}>House</option>
                      <option value={3}>Rent</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="pb-2">Message</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      placeholder="Your message"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn"
                    style={{ backgroundColor: "#ffa920" }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faPlane}
                            style={{ color: "white" }}
                          />
                        </div>
                        <div
                          className="col-10"
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            color: "white",
                          }}
                        >
                          Sent request
                        </div>
                      </div>
                    </div>
                  </button>
                </form>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="blog pt-5 pb-5"
        style={{ backgroundColor: "#e6e1e1" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col text-center pt-5 pb-5"
              style={{ fontSize: 45, lineHeight: 54 }}
            >
              <h1 style={{ fontWeight: 700 }}>Form our blog</h1>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 3,
                  color: "#8E8E93",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed tristique metus proin id lorem odio
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="box-hover-img" style={{ position: "relative" }}>
                <div className="images1">
                  <img src="https://media.istockphoto.com/id/1466782408/fr/photo/fen%C3%AAtres-de-blocs-dappartements-la-nuit-larges-avec-silhouette.webp?b=1&s=170667a&w=0&k=20&c=3Uwp7BHns8G6HLIJy55sOlA9rLUMuu8BAlBNzMteMsg=" />
                </div>
                <div className="sub-box">
                  <div className="container">
                    <div className="row">
                      <div className="col-4">
                        <div className="title1">Aprill</div>
                      </div>
                      <div className="col">
                        <a className="title2">
                          <i
                            className="fa-regular fa-folder-open"
                            style={{ color: "#c6c6d2" }}
                          />{" "}
                          Housing
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="name" style={{ textAlign: "center" }}>
                  Building gains into housing stocks and how to trade the sector
                </h2>
                <p className="read">
                  Read more <i className="fa-solid fa-arrow-right" />
                </p>
              </div>
            </div>
            <div className="col">
              <div className="box-hover-img" style={{ position: "relative" }}>
                <div className="images1">
                  <img src="https://media.istockphoto.com/id/1421422160/fr/photo/int%C3%A9rieur-de-la-salle-de-s%C3%A9jour.webp?b=1&s=170667a&w=0&k=20&c=mcNyT42Ido0L1QJ6ODOortnN2auBHV4ojvCoWNAmjqY=" />
                </div>
                <div className="sub-box">
                  <div className="container">
                    <div className="row">
                      <div className="col-4">
                        <div className="title1">Aprill</div>
                      </div>
                      <div className="col">
                        <a className="title2">
                          <i
                            className="fa-regular fa-folder-open"
                            style={{ color: "#c6c6d2" }}
                          />{" "}
                          Housing
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="name" style={{ textAlign: "center" }}>
                  92% of millennial homebuyers say inflation has impacted their
                  plans
                </h2>
                <p
                  className="read"
                  style={{ color: "#ffa920", fontSize: 12, fontWeight: 600 }}
                >
                  Read more <i className="fa-solid fa-arrow-right" />
                </p>
              </div>
            </div>
            <div className="col">
              <div className="box-hover-img" style={{ position: "relative" }}>
                <div className="images1">
                  <img src="https://media.istockphoto.com/id/1393537665/fr/photo/conception-moderne-de-maison-de-ville.webp?b=1&s=170667a&w=0&k=20&c=GZXJaPHtvTRH1NMluChY7_Aw4O2a91TNvF62jbTnAT0=" />
                </div>
                <div className="sub-box">
                  <div className="container">
                    <div className="row">
                      <div className="col-4">
                        <div className="title1">Aprill</div>
                      </div>
                      <div className="col">
                        <a className="title2">
                          <i
                            className="fa-regular fa-folder-open"
                            style={{ color: "#c6c6d2" }}
                          />{" "}
                          Housing
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="name" style={{ textAlign: "center" }}>
                  We are hiring ‘moderately,’ says Compass CEO
                </h2>
                <p
                  className="read"
                  style={{ color: "#ffa920", fontSize: 12, fontWeight: 600 }}
                >
                  Read more <i className="fa-solid fa-arrow-right" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Agent;
