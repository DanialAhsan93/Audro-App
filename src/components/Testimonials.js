import React from "react";
import "./testimonials.css";
import "react-multi-carousel/lib/styles.css";
import { Element } from "react-scroll";

export default function Testimonials({ client }) {
  return (
    <Element id="testimo">
      <div className="container text-center  py-5">
        <p className="test">TESTIMONIALS</p>
        <h3 className="mb-5 light-t">
          We Trust in <span> LIGHT </span> <br />
          Therapy
        </h3>
        <div className="container  py-5">
          <div className="container-div">
            <div className="carosel">
              <div className="main-div">
                {client.map((val, index) => {
                  return (
                    <div className="card card-1" key={index}>
                      <span>{val.img}</span>
                      <h3>{val.name}</h3>
                      <h5>{val.post}</h5>
                      <p>{val.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
