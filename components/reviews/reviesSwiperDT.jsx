"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/scrollbar";

import {  Scrollbar } from "swiper/modules";

import Image from "next/image"
import rewiesJson from "../../public/json/rewies.json"
import styles from "./reviews.module.scss"
import fontStyles from "../fonts/fonts.module.scss"



const Reviews = () => {

  const [goods, setGoods] = useState(rewiesJson)

  return (
    <div className="pt-5 mb-5 w-[1440px] layout">
    {/* <h2 className="text-center text-3xl">Customer reviews</h2> */}
    <div className="flex relative w-[1440px] items-center  px-6">
     
     
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        scrollbar={true}
        modules={[ Scrollbar]}
        snapOnRelease={true}
        className="mySwiper relative py-7"
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
      >
        {goods.map((item) => (
          <SwiperSlide key={item.id} className="sm:w-[340px] sw:h-[100%] md:w-[768px] bg-mainBgColor mb-10 ">
            <div className="flex">
               <div className="pt-7">
            <Image 
          src={item.img}
          alt={item.name}
          width={100}
          height={100}
          className="w-25 sh-25 md:w-[153px] md-h[153px]"
          />
            </div>        
          <ul className="pt-7 pl-5">
          <li>
                <p className="text-start"><strong>{item.name}</strong></p>
            </li>

            <li className="text-start">
              <p className="text-start">{item.skin}<strong>{item.skinparams}</strong></p>
              
            </li>
            
            <li>
                <p className="text-start">{item.ageTitle}<strong className={styles.skinParams}>{item.age}</strong></p>
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
        
        </SwiperSlide>
        ))}
        
       
      </Swiper>
    </div>
    </div>
  );
}

export default Reviews;