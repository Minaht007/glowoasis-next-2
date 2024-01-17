"use client"

import { useState } from 'react';
import bestsellersGoods from "../../public/json/bestseller.json"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/scrollbar";

// import './styles.css';

// import required modules
import { Navigation, Scrollbar } from 'swiper/modules';

export default function BestsellersSwiperDT() {
    const [goods, setGoods] = useState(bestsellersGoods)

  return (
    <>
    <div className="flex justify-between w-[350px] md:w-[710px] lg:w-[1190px] xl:w-[1300px] ml-auto mr-auto">
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        scrollbar={true}
        modules={[Navigation, Scrollbar]}
        style= {{
          "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-scrollbar-border-radius": "10px",
            "--swiper-scrollbar-top": "auto",
            "--swiper-scrollbar-bottom": "10px",
            "--swiper-scrollbar-left": "auto",
            "--swiper-scrollbar-right": "4px",
            "--swiper-scrollbar-sides-offset": "5%",
            "--swiper-scrollbar-bg-color": "rgba(167, 124, 111, 1)",
            "--swiper-scrollbar-drag-bg-color": "rgba(69, 55, 46, 1)",
            "--swiper-scrollbar-size": "3px"
        }}
        breakpoints={{
          390: {
            slidesPerView: 2,
            scrollbar: {
              enabled: true,
            },
          },
          768: {
            slidesPerView: 2,
            scrollbar: {
              enabled: true,
            },
          },
          1200: {
            slidesPerView: 4,
            scrollbar: {
              enabled: false,
            },
          },
          1440: {
            slidesPerView: 4,
            scrollbar: {
              enabled: false,
            },
          },
        }}
        className="mySwiper flex justify-between container"
      >
        {goods.map((item) => (
            <SwiperSlide key={item.id} className="">
              <div className="w-[165px] h-[397px] mb-[30px] md:w-[320px] md:h-[573px] md:mb-[45px] lg:w-[290px] lg:h-[601px]">
                <div className=" mb-[21px]">
                <Image
                className="w-[165px] h-[248px] md:w-[320px] md:h-[424px] lg:w-[290px] lg:h-[435px]"
                src={item.img}
                alt={item.name} 
                width={290} 
                height={435}              
                />
                </div>     
                <div className="h-[86px] mb-[5px]">
                <p className="text-sm">{item.text}</p>
                </div>
                <div className="">                
                <button className="border w-full h-[38px] lg:h-[50px] bg-btn-bg-primery-color">У кошик {item.price}</button>
                </div>
                </div>
            </SwiperSlide>                  
        ))}
      </Swiper>
      </div>
    </>
  );
}