import React from "react";
import "./loginmodal.css";

export default function LoginModal({ closemodal }) {
  return (
    <div className=" modalbg ">
      <div class="container  ">
        <div class="row justify-content-center">
          <div class="col-md-6 modal-pos">
            <div className="forms position-relative ">
              <form action="#">
                <input type="text" placeholder="Name" />
                <input type="Email" placeholder="Email" />
                <div className="input-grp">
                  <div className="check-terms">
                    <div>
                      <input className="check" type="checkbox" />
                    </div>
                    <label htmlFor="">I agree to the privacy Policy</label>
                  </div>
                  <span className="universal-btn header-btn">
                    <a href="">Log In</a>
                  </span>
                </div>
              </form>
              <span onClick={closemodal} className="close-btn">
                X
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
