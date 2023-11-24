import React from "react";
import "./aditionalbenifit.css";
import maskimg from "../../images/4_3.jpg";

export default function AditionalBenifit() {
  return (
    <div>
      <div className="container fluid benifit-section">
        <h5 className="text-start">Additional Benifits:</h5>
        <div className="row row-cols-md-3 justify-content-between">
          <div className="col col-12 benifit-cols">
            <p>
              How does light therapy work? Light therapy works by stimulating
              areas of the body with light waves that in turn activate the
              release of neurotransmitters in the brain and has been directly
              linked to revitalization and rejuvenation of the body. Light
              therapy can be done with the use of several devices, including
              light boxes or a wearable device.
            </p>
          </div>
          <div className="col col-12 benifit-cols">
            <p>
              What are some benefits of light therapy? - Increasing levels of
              serotonin in the brain - Reducing stress hormones in the body -
              Decreasing inflammation - Increasing levels of dopamine in the
              brain
            </p>
          </div>
          <div className="col col-12 benifit-cols">
            How long does it take for the benefits to take effect? We recommend
            a 20min session a day Generally, it takes about two weeks for light
            therapy to have an effect. Sometimes the benefits of light therapy
            can be immediate yet it is important to be patient and consistent
            with light therapy to experience its full benefits.
          </div>
        </div>
        <div className="row py-5 align-items-center row-cols-lg-2 seprator">
          <div className="col col-12 m-auto aditional-div">
            <h5>Not Sure Which Light Therapy Is Best For You?</h5>
            <p className=" lined-text position-relative">
              <span className="color-line"></span>
              Lorem ipsum dolor sit amet consectetur adipisicing <br />
              elit. Amet illum explicabo libero corrupti magnam, <br /> repellat
              accusantium numquam at adipisci accusamus repellat accusantium
              numquam at adipisci accusamus
            </p>
            <div>{/* <img src={colors} alt="" /> */}</div>
          </div>
          <div className="col col-12 pt-5  pt-lg-0">
            <div className=" m-auto">
              <img className="w-100" src={maskimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
