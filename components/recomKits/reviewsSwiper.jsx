"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/scrollbar";

import {  Scrollbar } from "swiper/modules";



const Reviews = () => {
  return (
    <div className="pt-10">
    <h2 className="text-center text-3xl">Customer reviews</h2>
    <div className="flex relative w-screen items-center mb-8 p-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        scrollbar={true}
        modules={[ Scrollbar]}
        snapOnRelease={true}
        className="mySwiper relative"
        style={{
          "--swiper-scrollbar-border-radius": "10px",
          "--swiper-scrollbar-top": "auto",
          "--swiper-scrollbar-bottom": "4px",
          "--swiper-scrollbar-left": "auto",
          "--swiper-scrollbar-right": "4px",
          "--swiper-scrollbar-sides-offset": "5%",
          "--swiper-scrollbar-bg-color": "rgba(167, 124, 111, 1)",
          "--swiper-scrollbar-drag-bg-color": "rgba(69, 55, 46, 1)",
          "--swiper-scrollbar-size": "3px",
        }}
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}

export default Reviews;