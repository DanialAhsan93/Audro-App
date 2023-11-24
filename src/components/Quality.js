import React from "react";
import "./quality.css";
import refine from "../images/Refine.jpg";

export default function Quality() {
  return (
    <div className="container-fluid quality-check">
      <div className="row row-cols-md-2 justify-content-center align-items-center">
        <div className="col col-12">
          <div className="quality-img">
            <img src={refine} alt="" />
          </div>
        </div>
        <div className="col col-12 quality-heading">
          <h3>
            Refine Your Skin From Anywhere With{" "}
            <span className="quality-span"> High-Quality </span> Light
            Rejuvenation.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Accusantium doloremque
            quae beatae exercitationem quo vel. Quibusdam, voluptatibus illum!
            Eligendi sapiente possimus autem tenetur dolorum corrupti vel
            expedita reprehenderit. Placeat, officiis?
          </p>
        </div>
      </div>
    </div>
  );
}
