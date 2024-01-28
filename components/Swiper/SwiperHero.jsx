"use client"

// import "/swiper.module.scss";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function SwiperHero() {
  return (
    <>
      <Swiper
      loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-[390px] h-[520px] md:w-[768px] md:h-[1024px] lg:w-screen lg:h-[526px]"
      >
        <SwiperSlide className="w-full bg-cover bg-center bg-no-repeat bg-hero-mob-1 lg:bg-hero-dt">     
        </SwiperSlide>
        <SwiperSlide className="w-full bg-cover bg-center bg-no-repeat bg-hero-mob lg:bg-hero-dt-1" >      
        </SwiperSlide>
        
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}