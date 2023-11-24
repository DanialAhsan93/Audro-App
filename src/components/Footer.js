import React from "react";
import "./footer.css";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row row-cols-lg-4 justify-content-between">
        <div className="col col-12 footer-col-1">
          <div>
            <img src={logo} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod
            saepe accusantium beatae odio aut placeat, facere, incidunt dolorum
            explicabo consectetur quam.
          </p>
          <span>
            <a href="">Read More </a> <span className="r-arrow">&rarr;</span>
          </span>
        </div>
        <div className="col col-12 footer-col-2">
          <p className=" fw-bold">General</p>
          <ul className="nav-links">
            <li className="foot-i">
              <a href="">Home</a>
            </li>
            <li className="foot-i">
              <a href="">About</a>
            </li>
            <li className="foot-i">
              <a href="">Blog</a>
            </li>
            <li className="foot-i">
              <a href="">Light Therapy</a>
            </li>
            <li className="foot-i">
              <a href="">Shop</a>
            </li>
            <li className="foot-i">
              <a href="">Affiliates</a>
            </li>
            <li className="foot-i">
              <a href="">Reviews</a>
            </li>
          </ul>
        </div>
        <div className="col col-12 footer-col-3">
          <p className=" fw-bold">Help</p>
          <ul className="nav-links">
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Return</a>
            </li>
            <li>
              <a href="">Shipping</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Warrenty</a>
            </li>
          </ul>
        </div>
        <div className="col col-12 footer-col-4">
          <p className=" fw-bold">Help</p>
          <span>
            <a href="">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </span>
          <span>
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </span>
          <span>
            <a href="">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </span>
        </div>
      </div>
      <hr />
      <div className="row row-cols-lg-2 justify-content-between align-items-center copyright-col">
        <div className="col col-12">
          <p>Copyright &copy;2023 Hassan Sardar All right's reserved</p>
        </div>
        <div className="col col-12 terms-condition">
          <span>
            <a href="">Terms And conditions</a>
          </span>
          <span>
            <a href="">Privacy policy</a>
          </span>
          <span>
            <a href="">Accesibility Statement</a>
          </span>
        </div>
      </div>
    </div>
  );
}
