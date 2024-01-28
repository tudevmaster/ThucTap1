import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faSearch } from "@fortawesome/free-solid-svg-icons";
const HomeFinder = () => {
  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div>
                <h1 style={{ fontSize: 60 }}>
                  We Wil find a perfect home for you
                </h1>
                <p>
                  find a variety of property that suit you very easily, forget
                  all difficuiltes in finding a residence for you
                </p>
              </div>
              <div className="container">
                <div className="box-tab ">
                  <ul>
                    <li className="title-item active">
                      <h4>Rent</h4>
                    </li>
                    <li className="title-item style">
                      <h4>Buy</h4>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-tab ">
                <form>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        {" "}
                        <input
                          style={{ width: 230 }}
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Type keyword..."
                        />
                      </div>
                      <div className="col px-3">
                        <select id="cars" name="cars">
                          <option value="volvo">Property</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                      <div className="col px-3">
                        {" "}
                        <select id="cars" name="cars">
                          <option value="volvo">Location</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                      <div className="col px-3">
                        {" "}
                        <div
                          className="btn"
                          style={{ backgroundColor: "#e1e1dd" }}
                        >
                          <FontAwesomeIcon
                            icon={faSliders}
                            style={{ color: "#ffa920" }}
                          />
                        </div>
                      </div>
                      <div className="col">
                        {" "}
                        <div
                          className="btn"
                          style={{
                            backgroundColor: "#ffa920",
                            color: "#f9f9f8",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faSearch}
                            style={{ color: "white", fontSize: "20" }}
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="number">
                <div className="container">
                  <div className="row">
                    <div className="col-7">
                      <div className="row">
                        <div className="col mt-5">
                          <h3
                            style={{
                              fontSize: 30,
                              fontWeight: 700,
                              marginBottom: 15,
                            }}
                          >
                            1500+
                          </h3>
                          <p style={{ color: "#8E8E93 !important" }}>
                            Property ready
                          </p>
                        </div>
                        <div className="col mt-5">
                          <h3
                            style={{
                              fontSize: 30,
                              fontWeight: 700,
                              marginBottom: 20,
                            }}
                          >
                            700+
                          </h3>
                          <p
                            style={{
                              color: "#8E8E93 !important",
                              fontSize: 13,
                            }}
                          >
                            Happy customer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mt-0">
              <div className="banner">
                <img src="https://images.unsplash.com/photo-1704972841788-86fac20fc87e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------Brand-------------------------------------------------- */}
      <section className="brand">
        <div className="container">
          <div className="row">
            <div className="col">
              {" "}
              <h4
                className
                style={{ fontSize: 16, lineHeight: 5, fontWeight: 600 }}
              >
                Trusted by over 150+ major companies
              </h4>
              <div className="slider-container pb-5">
                <div className="slider-content">
                  {/* Initial display */}
                  <div className="slide-item">
                    <img src="data:image/png;base64,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" />
                  </div>
                  <div className="slide-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-q5A2w0UgIdpb8EXkmIcA8BBRW3UJwr-T9w&usqp=CAU" />
                  </div>
                  <div className="slide-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3g66yNdH-ctiWdfD0_1_azVp_mvoszL9MA&usqp=CAU" />
                  </div>
                  <div className="slide-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR626dWTlyoEAmxjBE7JrME7qbYFNpwyk10ZA&usqp=CAU" />
                  </div>
                  <div className="slide-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX7BP0iJXMIAAI0Z8YwhyounpW9O8LWnCFQ&usqp=CAU" />
                  </div>
                  <div className="slide-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJoDuGYcZeA70FLyTKqrAOpo0GMHpXT0jcXs0uuL7rWR8GzGjir_dj88R0SrY-88TAw6o&usqp=CAU" />
                  </div>
                  <div className="slide-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMEob_i26VBvF7hJU7hsdzfbgxZPgDJhRQw&usqp=CAU" />
                  </div>
                  <div className="slide-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrL7Owsb64h061zh3tSByZRYiNfC7K47Vtg&usqp=CAU" />
                  </div>
                  <div className="slide-item">
                    <img src="https://is.vnecdn.net/v101/31/65/11/4116531/assets/images/logo/logo-acura.png" />
                  </div>
                  {/* Repeat items as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFinder;
