import React from "react";
import "./amber.css";
import amber from "../../images/amber.jpg";
import elips from "../../images/Ellipse_71.jpg";

export default function AmberLight() {
  return (
    <div>
      <div className="container-fluid Amber-light-bg">
        <div className="width-control">
          <div className="row row-cols-md-2">
            <div className="col col-12 Amber-heading">
              <div>
                <h3>Amber Light Therapy</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis eum voluptas error explicabo officia. Asperiores
                  ad consequuntur, eos dignissimos quasi molestiae sapiente,
                  sint sequi amet nesciunt dolorum excepturi beatae assumenda!
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore, molestias?
                </p>
              </div>
              <div className="">
                <h4 className="text-start">Revitalizes</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officiis temporibus fugit soluta non dicta. Laudantium
                  accusamus aliquid numquam quas quae in ratione assumenda
                  asperiores, sed recusandae inventore, eos magnam eveniet!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus facere quis saepe cumque corporis deleniti autem,
                  iste enim odio molestiae earum quasi ut pariatur soluta
                  doloribus quos possimus numquam eligendi?
                </p>
              </div>
            </div>
            <div className="col col-12 ">
              <div className="amber-img">
                <img src={amber} alt="" />
              </div>
            </div>
          </div>
          <div className="row row-cols-lg-2">
            <div className="col col-12 dr-says">
              <div className="elips-ing">
                <img src={elips} alt="" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate voluptate nulla optio earum quos magnam rerum ut,
                  officiis perspiciatis ad sed aut deserunt fugiat voluptates
                  facilis nisi facere quis recusandae!
                </p>
                <p className="dr-name">-Dr.Wagner</p>
              </div>
            </div>
            <div className="col col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
