import React from "react";
import "./descover.css";
import mask from "../images/Light_Vitamins.jpg";

export default function Descover() {
  return (
    <div>
      <div className="container-fluid bg-red">
        <div className="row py-5 row-cols-md-2 align-items-center justify-content-center">
          <div className="col col-12">
            <div className="">
              <img className="w-100" src={mask} alt="" />
            </div>
          </div>

          <div className="col col-12 pe-lg-5 sevenone sevenone1">
            <p className="p-1">DISCOVER</p>
            <h5 className="text-white">Light Vitamins</h5>
            <p className=" lined-text position-relative my-3 text-white">
              <span className="color-line bg-white "></span>
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
      </div>
    </div>
  );
}
