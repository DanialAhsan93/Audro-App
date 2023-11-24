import React, { useRef, useState } from "react";
// Import Swiper React components
import "./testimonialslider.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import clint1 from "../images/client1.jpg";
import clint2 from "../images/client2.jpg";
import clint3 from "../images/client3.jpg";

export default function TestimonialSlider() {
  return (
    <div className="testi-slider">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="inner-card">
              <div className="test-img">
                <img src={clint1} alt="" />
              </div>
              <p className="m-0 fw-bold">Maxen albert</p>
              <p className="mb-2">Lorem, ipsum.</p>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, tempore, laboriosam amet voluptas illo quos ab
                quibusdam dolores accusantium velit minus mollitia, eligendi
                eaque deleniti repellendus. Fuga, minima. Aliquid, quaerat!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="inner-card">
              <div className="test-img">
                <img src={clint2} alt="" />
              </div>
              <p className="m-0 fw-bold">Maxen albert</p>
              <p className="mb-2">Lorem, ipsum.</p>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, tempore, laboriosam amet voluptas illo quos ab
                quibusdam dolores accusantium velit minus mollitia, eligendi
                eaque deleniti repellendus. Fuga, minima. Aliquid, quaerat!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="inner-card">
              <div className="test-img">
                <img src={clint3} alt="" />
              </div>
              <p className="m-0 fw-bold">Maxen albert</p>
              <p className="mb-2">Lorem, ipsum.</p>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, tempore, laboriosam amet voluptas illo quos ab
                quibusdam dolores accusantium velit minus mollitia, eligendi
                eaque deleniti repellendus. Fuga, minima. Aliquid, quaerat!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="inner-card">
              <div className="test-img">
                <img src={clint2} alt="" />
              </div>
              <p className="m-0 fw-bold">Maxen albert</p>
              <p className="mb-2">Lorem, ipsum.</p>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, tempore, laboriosam amet voluptas illo quos ab
                quibusdam dolores accusantium velit minus mollitia, eligendi
                eaque deleniti repellendus. Fuga, minima. Aliquid, quaerat!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
