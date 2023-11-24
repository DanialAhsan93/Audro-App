import React from "react";
import "./redlight.css";
import redlight from "../../images/redlight.jpg";

export default function RedLight() {
  return (
    <div>
      <div className="container-fluid infrared-light-bg">
        <div className="width-control">
          <div className="row row-cols-lg-2">
            <div className="col col-12 infra-heading">
              <div>
                <h3>Red Light Therapy</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis eum voluptas error explicabo officia. Asperiores
                  ad consequuntur, eos dignissimos quasi molestiae sapiente,
                  sint sequi amet nesciunt dolorum excepturi beatae assumenda!
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore, molestias?
                </p>
              </div>
              <div className="infrared-desc-1">
                <ol>
                  <div className="infrared-sub-heading">
                    <div>
                      <li>Lorem ipsum dolor, sit .</li>
                    </div>
                    <div>
                      <li>Lorem ipsum dolor, sit .</li>
                    </div>
                    <div>
                      <li>Lorem ipsum dolor, sit .</li>
                    </div>
                    <div>
                      <li>Lorem ipsum dolor, sit .</li>
                    </div>
                    <div>
                      <li>Lorem ipsum dolor, sit.</li>
                    </div>
                  </div>
                </ol>
              </div>

              <h5 className="text-start">Red light therapy effects include</h5>
              <div className="infrared-desc-1">
                <ol>
                  <div className="infrared-sub-heading">
                    <div>
                      <li>Lorem ipsum dolor, sit .</li>
                    </div>
                    <div>
                      <li>Lorem ipsum dolor, sit .</li>
                    </div>
                    <div>
                      <li>Lorem ipsum dolor, sit .</li>
                    </div>
                  </div>
                </ol>
              </div>
            </div>
            <div className="col col-12">
              <div className="infra-img">
                <img src={redlight} alt="" />
              </div>
            </div>
          </div>
          <div className="anti-aging-red">
            <h4>Red Light Therapy for Anti-Aging</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              temporibus fugit soluta non dicta. Laudantium accusamus aliquid
              numquam quas quae in ratione assumenda asperiores, sed recusandae
              inventore, eos magnam eveniet! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatibus facere quis saepe
              cumque corporis deleniti autem, iste enim odio molestiae earum
              quasi ut pariatur soluta doloribus quos possimus numquam eligendi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
