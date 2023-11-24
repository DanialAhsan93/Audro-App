import React from "react";
import "./header.css";
import { Link } from "react-scroll";
import CareProducts from "./CareProducts";
import Specialist from "./Specialist";
import SkinCare from "./SkinCare";
import HeandyProduct from "./HeandyProduct";
import Descover from "./Descover";
import FutureMoment from "./FutureMoment";
import Quality from "./Quality";
import LightTherapy from "./LightTherapy";
import SquareCard from "./SquareCard";
import PrettyWomen from "./PrettyWomen";
import AllProducts from "./AllProducts";
import Newsletter from "./Newsletter";
import TestimonialSlider from "./TestimonialSlider";

export default function Header() {
  return (
    <>
      <div className="position-relative"></div>
      <div className=" container-fluid  bg-color">
        <span className="header-nav-shedow"></span>
        <div className="header-text">
          <div className="row ">
            <div className="col-8 col-lg-7">
              <h1>Light Science&reg; for Health & Beauty</h1>
              <p className=" lined-text position-relative">
                <span className="color-line"></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <span className="universal-btn header-btn">
                <Link href="">Shop Now</Link>
              </span>
            </div>
          </div>
        </div>
        <span className="header-shedow"></span>
        <div className="header-s-icons">
          <span className="header-social-icon">
            <i class="fa-brands fa-facebook-f"></i>
          </span>
          <span className="header-social-icon">
            <i class="fa-brands fa-instagram"></i>
          </span>
          <span className="header-social-icon">
            <i class="fa-brands fa-youtube"></i>
          </span>
        </div>
      </div>
      <div className="container-fluid theme-color">
        <div className=" text-center ">
          <h3 className="pt-5">Safe. Certified. Loved</h3>
          <div className="row text-center justify-content-around row-cols-lg-4 justify-content-center py-lg-5">
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
      <CareProducts />
      <Specialist />
      <SkinCare />
      <HeandyProduct />
      <Descover />
      <FutureMoment />
      <Quality />
      <LightTherapy />
      <SquareCard />
      <PrettyWomen />
      <TestimonialSlider />
      <AllProducts />

      <Newsletter />
      {/* <Newsletter /> */}
    </>
  );
}
