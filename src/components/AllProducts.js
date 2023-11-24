import React from "react";
import "./allproduct.css";
import handpic from "../images/All_Our_Products.jpg";

export default function AllProducts() {
  return (
    <div>
      <div className="container-fluid seprate">
        <div className="row row-cols-md-2 align-items-center">
          <div className="col col-12">
            <div className="all-p">
              <img className="w-100" src={handpic} alt="" />
            </div>
          </div>
          <div className="col col-12 mt-3 mt-lg-0">
            <div className="all-p-feature">
              <div className="all-p-f-icon">
                <span>
                  <i class="fa-solid fa-truck"></i>
                </span>
              </div>
              <div className="ps-3 pb-4 all-op">
                <h5 className="text-start">Free Delivery</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dignissimos.
                </p>
              </div>
            </div>
            <div className="all-p-feature">
              <div className="all-p-f-icon">
                <span>
                  <i class="fa-solid fa-truck"></i>
                </span>
              </div>
              <div className="ps-3 pb-4 all-op">
                <h5 className="text-start">Quality Gurrentied</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dignissimos.
                </p>
              </div>
            </div>
            <div className="all-p-feature">
              <div className="all-p-f-icon">
                <span>
                  <i class="fa-solid fa-truck"></i>
                </span>
              </div>
              <div className="ps-3 pb-4 all-op">
                <h5 className="text-start">1 year warrenty</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dignissimos.
                </p>
              </div>
            </div>
            <span className="universal-btn header-btn">
              <a href="">Shop Now</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
