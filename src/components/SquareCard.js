import React from "react";
import "./squarecard.css";
import img1 from "../images/Light_Vitamins1.jpg";
import img2 from "../images/Light_Vitamins_2.jpg";
import img3 from "../images/Light_Vitamins_3.jpg";

export default function SquareCard() {
  return (
    <div className="container-fluid squre-cards">
      <div className="row row-cols-lg-3 row-cols-md-2 ">
        <div className="col col-12 overflow-hidden">
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="col col-12">
          <div className="white-squre-1">
            <div>
              <h3>Light Vitamins</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                error.
              </p>
              <span className="universal-btn header-btn">
                <a href="">Shop Now</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col col-12 overflow-hidden">
          <div className=" ">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="col col-12">
          <div className="white-squre-2">
            <div>
              <h3>Light Vitamins</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                error.
              </p>
              <span className="universal-btn header-btn">
                <a href="">Shop Now</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col col-12 overflow-hidden">
          <div className="">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="col col-12">
          <div className="white-squre-3">
            <div>
              <h3>Light Vitamins</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                error.
              </p>
              <span className="universal-btn header-btn">
                <a href="">Shop Now</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
