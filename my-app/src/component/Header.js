import React from "react";
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className="head">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <a href="#">
              {
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Logo"
                />
              }
            </a>
          </div>
          <div className="col-10">
            <div className="container">
              <div className="row">
                <div className="col-6 align-items-center d-flex justify-content-end">
                  <div className="dropdown">
                    <a
                      className="btn text-warning dropdown-toggle"
                      href="#"
                      role="button"
                      id="homeDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <strong>Home</strong>
                    </a>
                    <a
                      className="btn text-warning dropdown-toggle"
                      href="#"
                      role="button"
                      id="homeDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <strong>Property</strong>
                    </a>
                    <a
                      className="btn text-warning dropdown-toggle"
                      href="#"
                      role="button"
                      id="homeDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <strong>Page</strong>
                    </a>
                    <a
                      className="btn text-warning dropdown-toggle"
                      href="#"
                      role="button"
                      id="homeDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <strong>Blog</strong>
                    </a>
                  </div>
                  {/* Các đoạn mã dropdown khác tương tự */}
                  <div>
                    <a className="btn" href="#">
                      <strong>Contact</strong>
                    </a>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <div className="mx-6 mt-2" style={{ fontSize: 14 }}>
                    <strong>
                      <i className="fa-solid fa-user" /> Register/Login{" "}
                    </strong>
                    <button
                      className="btn btn-warning"
                      type="submit"
                      style={{ color: "white" }}
                    >
                      <FontAwesomeIcon
                        icon={faHouse}
                        style={{ color: "white" }}
                      />
                      <span className="border-start mx-2" /> Sell property
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
