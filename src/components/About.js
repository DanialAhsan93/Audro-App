import React, { useEffect } from "react";
import "./about.css";
import tmask from "../images/transparentmask.png";
import mask from "../images/Beauty_From_Within.jpg";
import colors from "../images/Group-780.jpg";
import maskimg from "../images/Not_Sure.jpg";
import Newsletter from "./Newsletter";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container-fluid about-page">
        <div className="row row-cols-lg-2 justify-content-center ">
          <div className="col col-12 contact-col-1">
            <div className=" h-text about-headings">
              <h3 className=" mb-2 mb-lg-0 ">
                Meet Your <br />{" "}
                <a className="my-3" href="#">
                  Rejuvenation
                </a>{" "}
                <br />
                Specialist{" "}
              </h3>
              <div className="h-text-p ">
                <p className=" lined-text mb-3 mb-lg-0  position-relative ">
                  <span className="color-line "></span>
                  Next Generation Performance
                </p>
              </div>
            </div>
            <span className="universal-btn ">
              <a href="">Shop Now</a>
            </span>
          </div>
          <div className="col col-12">
            <div className="transperentmask">
              <img src={tmask} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative about-sec-2"></div>
      <div className="container-fluid theme-color positioned-sec">
        <div className=" text-center ">
          <h3 className="pt-5">Safe. Certified. Loved</h3>
          <div className="row text-center justify-content-center row-cols-lg-4 justify-content-center">
            <div className="col col-12 mx-lg-2  text-center p-5 hover-bg">
              <span className="head-icon">
                <i class="fa-regular fa-circle-check"></i>
              </span>
              <h5 className="mt-3">
                FDA cleared Class || <br /> Medical Device
              </h5>
            </div>
            <div className="col col-12  text-center p-5 mx-lg-2 m-md-1 hover-bg">
              <span className="head-icon">
                <i class="fa-solid fa-certificate"></i>
              </span>
              <h5 className="mt-3">
                Hieghtest Quality <br /> Light Gadgets
              </h5>
            </div>
            <div className="col col-12 mx-lg-3 text-center p-5 hover-bg">
              <span className="head-icon">
                <i class="fa-solid fa-hand-holding-heart"></i>
              </span>
              <h5 className="mt-3">
                100 + patients Light <br /> Therapy and R&D
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about-sec-3">
        <div className="row py-5 row-cols-lg-2 align-items-center justify-content-center">
          <div className="col col-12">
            <div className="">
              <img src={mask} alt="" />
            </div>
          </div>

          <div className="col col-12 pe-lg-5 sevenone sevenone1 about-sevenone">
            <p className="p-1">Natural Skin Care</p>
            <h5>
              <span>Beauty </span> from <br />
              Within
            </h5>
            <p className=" lined-text position-relative my-3">
              <span className="color-line "></span>
              Lorem ipsum dolor sit amet consectetur adipisicing <br />
              elit. Amet illum explicabo libero corrupti magnam, <br /> repellat
              accusantium numquam at adipisci accusamus
            </p>
            <span className="universal-btn2  des-btn">
              <a className=" bg-white" href="">
                Light Therapies
              </a>
            </span>
          </div>
        </div>
        <div className="row py-5 align-items-center row-cols-md-2 about-sep">
          <div className="col col-12 m-auto sevenone">
            <h3>7+1</h3>
            <h5>Light Vitamins</h5>
            <p className=" lined-text position-relative">
              <span className="color-line"></span>
              Lorem ipsum dolor sit amet consectetur adipisicing <br />
              elit. Amet illum explicabo libero corrupti magnam, <br /> repellat
              accusantium numquam at adipisci accusamus
            </p>
            <div>
              <img src={colors} alt="" />
            </div>
          </div>
          <div className="col col-12 pt-5  pt-lg-0">
            <div className=" m-auto">
              {/* <span className="gradient">
                <div className="maker-div">
                  bhjhfg <br />
                  hjhjhjqh <br /> bghghgyyhhu <br /> buyutrdsstghjdfghj <br />
                  bhjhfg <br />
                  hjhjhjqh <br />
                  <br />
                  bhjhfg <br />
                </div>
              </span> */}
              <img className="w-100" src={maskimg} alt="" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <span className="universal-btn ">
            <a href="">Learn the Basics</a>
          </span>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
