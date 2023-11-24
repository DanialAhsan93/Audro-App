import React from "react";
import "./skincare.css";
import skinpic from "../images/Aduro_Light_and_ATP2-06.jpg";

import { Element } from "react-scroll";

export default function SkinCare() {
  return (
    <Element id="care">
      <div className="container-fluid light-bg">
        <div className="">
          <div className="row row-cols-md-2">
            <div className="col col-12 px-lg-5 py-5 py-lg-0 mb-3 care-sction">
              <h3>
                Light <span>Waves</span> <br /> Ahead.
              </h3>
              <p className=" lined-text position-relative">
                <span className="color-line"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                illum explicabo libero corrupti magnam, repellat accusantium
                numquam at adipisci accusamus
              </p>

              <div className="div1 div-bg">
                <div className="skin-icon">
                  <span className="pins">
                    <i className="fa-solid fa-thumbtack"></i>
                  </span>
                </div>
                <div>
                  <h5 className=" text-start">Increased Energy Production</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error, dolorem?
                  </p>
                </div>
              </div>
              <div className="div2 div-bg">
                <div className="skin-icon">
                  <span className="pins">
                    <i className="fa-solid fa-thumbtack"></i>
                  </span>
                </div>
                <div>
                  <h5 className=" text-start">Natural Anti-Depressant</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error, dolorem?
                  </p>
                </div>
              </div>
              <div className="div3 div-bg">
                <div className="skin-icon">
                  <span className="pins">
                    <i className="fa-solid fa-thumbtack"></i>
                  </span>
                </div>
                <div>
                  <h5 className="text-start">Younger Looking Skin</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error, dolorem?
                  </p>
                </div>
              </div>
              <span className="universal-btn ">
                <a href="">Shop Now</a>
              </span>
            </div>
            <div className="col col-12 image-col">
              <img src={skinpic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
