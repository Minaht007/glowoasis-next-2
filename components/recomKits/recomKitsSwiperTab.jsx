"use client"

import Image from "next/image"
import { useState } from "react";
import style from "./recomKitsSwiper.module.scss"

import { Swiper, SwiperSlide } from 'swiper/react';

import recKitJson from "../../public/json/recomendKits.json"
import fontStile from "../fonts/fonts.module.scss"


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
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination]}
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
          <h2 className={`pt-5 pb-3 ${fontStile.istokWebTitle}`}> {item.title}</h2>

          <div className="h-12 w-[327px] pb-4">
            <p className="text-center pb-3 w-[327px]">{item.slogan}</p>
          </div>
          
          <div className="mt-4 pb-2">
            <button className="py-[16px] px-[124px] border border-1 border-gray-900 rounded-md">{item.button}</button>
          </div>
                      
        </SwiperSlide>
        ))}
           
      </Swiper>
    </>
  );
}