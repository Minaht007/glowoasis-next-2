"use client"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import {  Scrollbar, Navigation } from "swiper/modules";

import Image from "next/image"
import bestsellerJson from "../../public/json/bestseller.json"
import {useState} from "react"
import style from "./bestsellers.module.scss"






const Reviews = () => {
  const [goods, setGoods] = useState(bestsellerJson)
  return (
    <div className="pt-5">
    {/* <h2 className="text-center text-3xl">Customer reviews</h2> */}
    <div className="flex relative w-screen items-center mb-8 p-10">
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true
        }}
        scrollbar={true}
        modules={[ Scrollbar, Navigation]}
        snapOnRelease={true}
        navigation={true}
        className="mySwiper relative "
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
          "--swiper-button-prev": "#000000"
        }}
      >
        {goods.map((item) => (
        <SwiperSlide key={item.id} className={style.bsDtSwiperInner}>
          <div >
            <Image
              src={item.img}
              alt={item.name}
              width={306}
              height={434}
              className={style.bestsellerImg} 
            />
          </div>
          <div className="sm:w-[289px] sm:pt-5 sm:h-[86px]">
            <p>
              {item.text}
            </p>
          </div>
          <div className="pb-7 pt-3">
            <button className="border border-1 border-gray-900 bg-addBgColor py-4 px-[90px]">У кошик {item.price}</button>
          </div>
        </SwiperSlide>
        ))}        
      </Swiper>
    </div>
    </div>
  );
}

export default Reviews;