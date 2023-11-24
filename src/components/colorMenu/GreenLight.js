import React from "react";
import "./green.css";
import green from "../../images/green.jpg";

export default function GreenLight() {
  return (
    <div>
      <div className="container-fluid green-light-bg">
        <div className="width-control">
          <div className="row row-cols-md-2">
            <div className="col col-12 Amber-heading">
              <div>
                <h3>Green Light Therapy</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis eum voluptas error explicabo officia. Asperiores
                  ad consequuntur, eos dignissimos quasi molestiae sapiente,
                  sint sequi amet nesciunt dolorum excepturi beatae assumenda!
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore, molestias?
                </p>
              </div>
              <div className="benifets-heading">
                <h5>Benifits Include:</h5>
              </div>
              <div className="green-benifit-div">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. !
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo, odio!
                </p>
              </div>
              <div className="infrared-desc-1">
                <ol>
                  <div className=" green-block">
                    <div>
                      <li>
                        <span>Increased Blood Circulation: </span> Lorem ipsum,
                        dolor sit amet consectetur adipisicing elit. Esse
                        deserunt laborum minus culpa explicabo sequi odio id
                        optio repellat,
                      </li>
                    </div>
                    <div>
                      <li>
                        <span>Increased Blood Circulation: </span> Lorem ipsum,
                        dolor sit amet consectetur adipisicing elit. Esse
                        deserunt laborum minus culpa explicabo sequi odio id
                        optio repellat,
                      </li>
                    </div>
                  </div>
                </ol>
              </div>
            </div>
            <div className="col col-12">
              <div className="amber-img">
                <img src={green} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
