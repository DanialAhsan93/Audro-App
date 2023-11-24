import React from "react";
import "./future.css";
import future from "../images/asd_1.jpg";

export default function FutureMoment() {
  return (
    <div className="container-fluid future-div">
      <div className="row row-cols-md-2 justify-content-center align-items-center">
        <div className="col col-12 ">
          <div className="future-img">
            <img src={future} alt="" />
          </div>
        </div>
        <div className="col col-12 moment">
          <h3>
            Take A <span className="red-moment"> Moment </span> For the Future
            you!
          </h3>
          <p className=" lined-text position-relative my-3">
            <span className="color-line "></span>
            Lorem ipsum dolor sit amet consectetur adipisicing <br />
            elit. Amet illum explicabo libero corrupti magnam, <br /> repellat
            accusantium numquam at adipisci accusamus
          </p>
          <span className="universal-btn header-btn">
            <a href="">Shop Now</a>
          </span>
        </div>
      </div>
    </div>
  );
}
