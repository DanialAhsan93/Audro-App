import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 40) {
      document.querySelector(".container-f ").classList.add("active-bar");
    } else {
      document.querySelector(".container-f ").classList.remove("active-bar");
    }
  });
  const [show, setShow] = useState(false);
  const CloseModal = () => {
    setShow(false);
  };

  return (
    <div className="z-index">
      <div className="container-f ">
        <div className="container text-center ">
          {/* <div>
          <p className="btn rounded-pill py-1 px-2 mt-3 bg-white ">
            Aduro packege Deals{" "}
            <a className="nav-link d-inline-block text-danger" href="#">
              Get it now
            </a>
          </p>
        </div> */}
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src={logo} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon "></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 header-nav">
                  <li className="nav-item px-1">
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item px-1">
                    <NavLink className="nav-link " to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="nav-item px-1">
                    <NavLink className="nav-link " to="/about">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item px-1">
                    <NavLink className="nav-link " to="/colors">
                      Light Therapy
                    </NavLink>
                  </li>
                </ul>
                <div className="d-flex align-items-center icons nav-icons">
                  <div className="px-3">
                    <span
                      className="login-btn"
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      <i class="fa-solid fa-user"></i>
                    </span>
                  </div>
                  <div className="px-3 ">
                    <Link className="shopyfy" to="/Cart">
                      <span>
                        <i class="fa-brands fa-shopify"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {show && <LoginModal closemodal={CloseModal} />}
      </div>
    </div>
  );
}
