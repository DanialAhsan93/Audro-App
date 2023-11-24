import React from "react";
import "./newsletter.css";
import hand from "../images/hand.png";
import { Element } from "react-scroll";

export default function Newsletter() {
  return (
    <Element id="news">
      <div>
        <div className="container-fluid newsletter-bg">
          <div className="">
            <div className="row row-cols-lg-2 px-lg-5 flex-dirextion newspaper">
              <div className="col col-12 second-1">
                <h3>
                  Join Our <br /> NewsLetter
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="position-relative input-w">
                  <form action="#">
                    <input className="email" type="email" required />
                    {/* <button className="btn-news text-white" type="submit">
                      Subscribe
                    </button> */}
                    <span
                      typeof="submit"
                      className="universal-btn btn-news text-white"
                    >
                      <a href="">Subscribe</a>
                    </span>
                    <div className="check-box">
                      <input className="check" type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">
                        I agree to the privacy Policy
                      </label>
                    </div>
                  </form>
                </div>
                <h5>Download the App</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                <div className="download ">
                  <div className="d-flex align-items-center border rounded-pill mx-1 solid-social">
                    <span className="play-icon">
                      <i class="fa-brands fa-app-store"></i>
                    </span>
                    <div>
                      <a href="">
                        <span className="d-block">Download the</span>
                        <span className="d-block">App Store</span>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center border rounded-pill solid-social">
                    <span className="play-icon">
                      <i class="fa-brands fa-google-play"></i>
                    </span>
                    <div>
                      <a href="">
                        <span className="d-block">Download the</span>
                        <span className="d-block">Play store</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-12"></div>
              {/* <div className="col col-12 second-last">
                <img src={hand} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
