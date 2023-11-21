"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/scrollbar";

import {  Scrollbar } from "swiper/modules";

import Image from "next/image"
import Test1 from "../../public/img/allGoods/kit-3-3x.png"
import Test2 from "../../public/img/allGoods/eye-cream-3x.png"
import Test3 from "../../public/img/allGoods/eye-cream-3x.png"
import Test4 from "../../public/img/allGoods/eye-cream-3x.png"
import Test5 from "../../public/img/allGoods/eye-cream-3x.png"
import Test6 from "../../public/img/allGoods/eye-cream-3x.png"




const Reviews = () => {
  return (
    <div className="pt-10">
    {/* <h2 className="text-center text-3xl">Customer reviews</h2> */}
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
        <SwiperSlide className="sm:w-[340px] sw:h-[488px] bg-mainBgColor">
          <Image 
          src={Test1}
          alt="Test1"
          width = {100}
          height = {100}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
          src={Test2}
          alt="Test1"
          width = {300}
          height = {500}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
          src={Test3}
          alt="Test1"
          width = {300}
          height = {500}
          />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}

export default Reviews;