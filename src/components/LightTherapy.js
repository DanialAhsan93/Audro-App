import React from "react";
import "./lighttherapy.css";
import { Element } from "react-scroll";
import lightbg from "../images/Features_Image.jpg";

export default function LightTherapy() {
  return (
    <Element id="therapy">
      <div className="container-fluid therapy-bg mt-5">
        <div>
          <span className="rounded-shed"></span>
          <div className="container-fluid">
            <h3 className="text-center pt-5 heading">Light Science</h3>

            <div className="row pt-5 row-cols-lg-2 justify-content-between flex-reverse align-items-center ">
              <div className="col col-12 col1">
                <h3>
                  Are You
                  <br /> Missing
                  <span> Essential</span> <br />
                  Light Vitamins
                </h3>
              </div>
              <div className="col col-12 col2">
                <div className="card card1">
                  <div className="card-title">
                    <h3>
                      The Average <br /> Americans spend <br />
                    </h3>
                    <span className="niteez">
                      90 <span className="percent">%</span>
                    </span>{" "}
                    <br />
                    <h3>of Time Indoors!</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed nam illum, iste laboriosam odit vitae. Perferendis
                      laboriosam saepe impedit quidem officiis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={lightbg} alt="" />
          </div>
        </div>
      </div>
    </Element>
  );
}
