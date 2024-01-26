"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/scrollbar";

import {  Scrollbar } from "swiper/modules";

import Image from "next/image"
import reviewsJson from "../../public/json/rewies.json"


const Reviews = () => {

  const [goods, setGoods] = useState(reviewsJson)

  return (
    <div className="w-screen ml-[96px] cursor-pointer">
    {/* <h2 className="text-center text-3xl">Customer reviews</h2> */}
    <div className="">
     
     
      <Swiper
        slidesPerView={3.5}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true
        }}
        scrollbar={true}
        modules={[ Scrollbar]}
        snapOnRelease={true}
        className="mySwiper"
        style={{
          "--swiper-scrollbar-border-radius": "10px",
          "--swiper-scrollbar-top": "auto",
          "--swiper-scrollbar-bottom": "10px",
          "--swiper-scrollbar-left": "auto",
          "--swiper-scrollbar-right": "4px",
          "--swiper-scrollbar-sides-offset": "5%",
          "--swiper-scrollbar-bg-color": "rgba(167, 124, 111, 1)",
          "--swiper-scrollbar-drag-bg-color": "rgba(69, 55, 46, 1)",
          "--swiper-scrollbar-size": "3px",
        }}
        breakpoints={{
          390: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.3,
          },
          1200: {
            slidesPerView: 3.5,
          },
          1440: {
            slidesPerView: 3.5,
          },
        }}
      >
        {goods.map((item) => (
          <SwiperSlide key={item.id} className="mb-10 p-8 w-[404px] bg-[#F1E2DD]">
            <div className="w-[404px] h-[611px]">
              <div className="flex">
               <div className="">
            <Image 
          src={item.img}
          alt={item.name}
          width={100}
          height={100}
          className="md:w-[153px] md-h[153px]"
          />
            </div>        
          <ul className="">
          <li>
                <p className="text-start"><strong>{item.name}</strong></p>
            </li>

            <li className="text-start">
              <p className="text-start">{item.skin}<strong>{item.skinparams}</strong></p>
              
            </li>
            
            <li>
                <p className="text-start">{item.ageTitle}<strong className="">{item.age}</strong></p>
            </li>
            <li >
                <p className="text-start pr-2">{item.productTitle}<strong>{item.product}</strong></p> 
            </li>
          </ul>  
          </div>   
            <div className="pt-10 pb-[100px] text-start px-3">
              <span > 
                {item.text}
              </span>
            </div>
            </div>
        </SwiperSlide>
        ))}     
      </Swiper>
    </div>
    </div>
  );
}

export default Reviews;