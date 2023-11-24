import React, { useEffect } from "react";
import "./contact.css";
import MeetUs from "./MeetUs";
import Newsletter from "./Newsletter";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container-fluid contact-bg">
        <div className="row row-cols-lg-2  justify-content-center align-items-center">
          <div className="col col-12 ">
            <div className="contact-heading">
              <h3>Contact Us</h3>
              <p className=" lined-text position-relative">
                <span className="color-line"></span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati, architecto!
              </p>
              <span className="universal-btn contact-btn">
                <a href="">FAQ</a>
              </span>
            </div>
          </div>
          <div className="col col-12 ">
            <div className="forms">
              <form action="#">
                <input type="text" placeholder="Name" />
                <input type="Email" placeholder="Email" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className="input-grp">
                  <div className="check-terms">
                    <div>
                      <input className="check" type="checkbox" />
                    </div>
                    <label htmlFor="">I agree to the privacy Policy</label>
                  </div>
                  <span className="universal-btn header-btn">
                    <a href="">Submit</a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <MeetUs />
      <Newsletter />
    </div>
  );
}
