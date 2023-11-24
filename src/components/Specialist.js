import React, { useState } from "react";
import "./specialist.css";
import mask from "../images/Skin_Care_6.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Slider } from "./Data";
import { Element } from "react-scroll";

export default function Specialist() {
  const [curr, setCurr] = useState(0);
  const next = () => {
    setCurr((curr) => (curr === 0 ? Slider.length - 3 : curr - 1));
  };
  const prev = () => {
    setCurr((curr) => (curr === Slider.length - 3 ? 0 : curr + 1));
  };

  return (
    <Element id="special">
      <div className="container-fluid color-container">
        <div className="">
          <div className="row row-cols-md-2 row-cols-lg-2 align-items-center">
            <div className="col col-12">
              <div className=" mb-lg-0">
                <img className="w-100" src={mask} alt="" />
              </div>
            </div>
            <div className="col  col-12 h-text">
              <h3 className="text-white mb-2 mb-lg-0 ">
                Meet Your <br />{" "}
                <a className="my-3 text-white" href="#">
                  Rejuvenation
                </a>{" "}
                <br />
                Specialist{" "}
              </h3>
              <div className="h-text-p">
                <p className=" lined-text mb-3 mb-lg-0  position-relative ">
                  <span className="color-line bg-white"></span>
                  Next Generation Performance
                </p>
              </div>
            </div>
          </div>
          <div className=" position-relative carosel-bg">
            <div className="wraper">
              <div className="carasol">
                <div
                  className="main"
                  style={{ transform: `translateX(-${curr * 230}px)` }}
                >
                  {Slider.map((val, index) => {
                    return (
                      <div className="position-relative icons-div " key={index}>
                        <div className="d-flex align-items-center span-div">
                          {/* <span className="m-auto">{val.img}</span> */}
                          <img className="w-100" src={val.img} alt="" />
                          <div className="hoverd-div">
                            <div className="hoverd-btn">
                              <span className="universal-btn ">
                                <a href="">Shop Now</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="btn-flow">
            <span onClick={next} className=" next ">
              &larr;
            </span>
            <span onClick={prev} className=" next">
              &rarr;
            </span>
          </div>
        </div>

        {/* <div className="positioning">
        <div className="hide-overflow">
          <div className="row col-lg-3 cards-flow slides"> */}

        {/* <div className="col colum">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col colum">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col colum">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col colum">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col colum">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col colum">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col colum">
              <h3>Heading</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div> */}
        {/* </div>
        </div>
      </div> */}
        {/* <div className="slider-btn">
        <button className="me-2">
          <span id="prev-btn">
            <i class="fa-solid fa-arrow-left"></i>
          </span>
        </button>
        <button className="ms-2">
          <span className="next">
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div> */}
      </div>
    </Element>
  );
}
