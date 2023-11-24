import React, { useEffect } from "react";
import "./colortherapy.css";
import mask94 from "../images/Mask_Group_94.jpg";
import AditionalBenifit from "./colorMenu/AditionalBenifit";
import ParentColorDiv from "./colorMenu/ParentColorDiv";

export default function ColorTherapy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container-fluid color-therapy">
        <div className="row row-cols-lg-2  color-col-rev">
          <div className="col col-12">
            <h3>Everything is Light Therapy</h3>
            <p className=" lined-text therapy-sub-head position-relative">
              <span className="color-line"></span>
              What is Light Therapy:
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              mollitia dolor explicabo omnis voluptates atque, officia repellat
              beatae soluta magni in, iusto itaque, distinctio quos eius
              provident? Nisi, hic molestias! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nobis ullam necessitatibus ab
              accusamus aspernatur quod eveniet perferendis expedita accusantium
              incidunt repudiandae deleniti laboriosam vitae, ipsa enim libero
              veniam. Suscipit, explicabo!
            </p>
            <div className="caution">
              <span>
                <i class="fa-solid fa-circle-exclamation"></i>
              </span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                animi aliquam rem officia, maiores obcaecati?
              </p>
            </div>
          </div>
          <div className="col col-12">
            <div className="color-p-img">
              <img src={mask94} alt="" />
            </div>
          </div>
        </div>
      </div>
      <AditionalBenifit />
      <ParentColorDiv />
    </div>
  );
}
