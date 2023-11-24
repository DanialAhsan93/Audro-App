import React from "react";
import "./pretywomen.css";
import pretty from "../images/Pretty_Women1_1.jpg";
import proof from "../images/Pretty_Women_Proof_1.jpg";

export default function PrettyWomen() {
  return (
    <div className="container-fluid pretywomen prety-cover position-relative">
      <div className="">
        <div className="row row-cols-md-2 justify-content-center align-items-center">
          <div className="col col-12 ">
            <div className="prety-img">
              <img className="" src={pretty} alt="" />
            </div>
          </div>
          <div className="col col-12 proof">
            <p>Pretty Women Proof</p>
          </div>
        </div>
        <div className="insta-proof">
          <img src={proof} alt="" />
        </div>
      </div>
    </div>
  );
}
