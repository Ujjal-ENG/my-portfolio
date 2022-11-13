import React from "react";
import "./testmonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testmonials = () => {
  return (
    <section id="testmonials">
      <h5>Review from Client</h5>
      <h2>Testmonials</h2>

      <Swiper
        className="container testmonials__container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testmonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">KOpipoi Kooko</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            necessitatibus suscipit voluptatum libero molestias assumenda sed
            unde hic soluta cumque eos ipsa eum, expedita minima, mollitia
            eaque, consequatur ducimus cupiditate!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testmonials">
          <div className="client__avatar">
            <img src={AVTR2} alt="" />
          </div>
          <h5 className="client__name">KOpipoi Kooko</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            necessitatibus suscipit voluptatum libero molestias assumenda sed
            unde hic soluta cumque eos ipsa eum, expedita minima, mollitia
            eaque, consequatur ducimus cupiditate!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testmonials">
          <div className="client__avatar">
            <img src={AVTR3} alt="" />
          </div>
          <h5 className="client__name">KOpipoi Kooko</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            necessitatibus suscipit voluptatum libero molestias assumenda sed
            unde hic soluta cumque eos ipsa eum, expedita minima, mollitia
            eaque, consequatur ducimus cupiditate!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testmonials">
          <div className="client__avatar">
            <img src={AVTR4} alt="" />
          </div>
          <h5 className="client__name">KOpipoi Kooko</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            necessitatibus suscipit voluptatum libero molestias assumenda sed
            unde hic soluta cumque eos ipsa eum, expedita minima, mollitia
            eaque, consequatur ducimus cupiditate!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testmonials;
