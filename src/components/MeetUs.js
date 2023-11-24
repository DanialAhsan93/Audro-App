import React from "react";
import "./meetus.css";

export default function MeetUs() {
  return (
    <div className="container-fluid meetus-bg">
      <div className="meet-heading">
        <p>GET IN TOUCH</p>
        <h5>Aduro</h5>
      </div>
      <div className="row row-cols-lg-3 justify-content-between">
        <div className="col col-12 align-item">
          <div className="card-meet-1">
            <div className="card-t">
              <h3>Customer Service Hours</h3>
              <p>
                Mon to Fri 9:00 - 18:00 CET <br /> Sat, Sun Closed
              </p>
              <div className="card1-icons">
                <div className="meet-icons">
                  <div>
                    <a href="">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </div>
                  <p>Tel: 0345-8146422</p>
                </div>

                <div className="meet-icons">
                  <div>
                    <a href="">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                  <p>Whatsapp: 0345-8146422</p>
                </div>

                <div className="meet-icons">
                  <div>
                    <a href="">
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                  <p>Email: mrhassan246@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-12 align-item">
          <div className="card2 card-meet-1">
            <div className="card2-t">
              <h3>Social Contacts</h3>

              <p className="line-h">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                esse neque, eum,
              </p>
              <div className="meet-icons">
                <a href="">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <p>@AduroSkincare.com</p>
              </div>
              <div className="meet-icons">
                <a href="">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <p>@AduroSkincare.com</p>
              </div>
              <div className="meet-icons">
                <a href="">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <p>@AduroSkincare.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-12 align-item">
          <div className="card2 card-meet-1">
            <div className="card2-t">
              <h3>Addresses</h3>

              <div>
                <p className="line-adres">Warehouse:</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Soluta, nam!
                </p>
                <p className="addres-h">Office</p>
                <p className="addres-h">Shenzhen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
