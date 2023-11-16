"use client"

import Image from "next/image"
import { useState } from "react";
import style from "./recomKitsSwiper.module.scss"

import { Swiper, SwiperSlide } from 'swiper/react';

import recKitJson from "../../public/json/recomendKits.json"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';




export default function RecGoodsSwiper() {
  const [goods, setGoods] = useState(recKitJson)

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {goods.map((item) => (
        <SwiperSlide key={item.id} className={style.recKitsContainer} >
          <Image 
          src={item.img}
          alt="item.name"
          width={327}
          height={434}
          />
          <h2 className="pt-5 pb-3">{item.title}</h2>
          <p className="text-center pb-3">{item.slogan}</p>
          <button className="py-[16px] px-[124px] border border-1 border-gray-900 rounded-sm">{item.button}</button>            
        </SwiperSlide>
        ))}
           
      </Swiper>
    </>
  );
}