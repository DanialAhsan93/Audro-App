import React from "react";
import "./careproduct.css";
import pduro from "../images/aduro-mask.png";
import mask from "../images/Group_9509_2.jpg";
import { Element } from "react-scroll";
export default function CareProducts() {
  return (
    <Element id="product">
      <div>
        <div className="container-fluid text-center">
          <div className="py-5 care-p">
            <p>A League Of It's Own</p>

            <h5 className="box-shadow">
              Astonishing results.
              <br />
              <span className="shadow1">Comfortable </span>
              and easy to clean. the altimate mask Experience
            </h5>
          </div>
          <div className="row  row-cols-md-2 row-cols-lg-2 margin-top">
            <div className="col col-12 my-5 my-md-2 my-lg-0">
              <p>Feel Great</p>
              <h3 className="with-in mb-3">
                Skin Care <br /> From <a href="#">within</a>
              </h3>
              <span className="universal-btn header-btn">
                <a href="">Shop Now</a>
              </span>
            </div>
            <div className="col col-12">
              <div className=" colored-div">
                <img className="w-100" src={mask} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
