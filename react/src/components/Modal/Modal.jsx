/* eslint-disable react/prop-types */
import "./Modal.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { register } from "swiper/element/bundle";

register();

export default function Modal({ items, onClose }) {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <img src={item.src} alt={item.description} className="modal-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
