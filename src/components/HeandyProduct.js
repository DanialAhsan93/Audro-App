import React from "react";
import "./heandy.css";
import heandy from "../images/0521_jpg.jpg";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import video from "../images/beach.mp4";
import maskimg from "../images/4_3.jpg";
import colors from "../images/Cap99ure.png";

export default function HeandyProduct() {
  return (
    <div>
      <div className="container-fluid handy-bg mt-5">
        <div className=" mt-5 video-set">
          <Video
            autoPlay
            loop
            muted
            controls={["no"]}
            // onCanPlayThrough={() => {
            //   // Do stuff
            // }}
          >
            <source src={video} type="video/mp4" />
            <track srcLang="en" src={video} default />
          </Video>
        </div>
        <div className="row pt-lg-5 m-auto row-cols-md-2 align-items-center">
          <div className="col col-12 m-auto">
            <div>
              <img className="rounded-5 w-100" src={heandy} alt="" />
            </div>
          </div>
          <div className="col col-12 heandy-text">
            <div className="">
              <h3 className="">
                Your{" "}
                <span style={{ textDecoration: "underline", color: "#ff5968" }}>
                  {" "}
                  Future{" "}
                </span>{" "}
                <br /> fits in the palm <br /> of your Hand{" "}
              </h3>
            </div>
            <span className="universal-btn header-btn">
              <a href="">Shop Now</a>
            </span>
          </div>
        </div>
        <div className="row py-5 align-items-center row-cols-md-2 seprator">
          <div className="col col-12 m-auto sevenone">
            <h3>7+1</h3>
            <h4 className="haandi">Light Vitamins</h4>
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
      </div>
    </div>
  );
}
