"use client"

import { useState } from 'react';
import bestsellersGoods from "../../public/json/bestseller.json"
import Image from "next/image"
import styles from "./bestsellers.module.scss"
import style from "./bestsellerDT.module.scss"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function bsSwiperDT() {
    const [goods, setGoods] = useState(bestsellersGoods)

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {goods.map((item) => (
            <SwiperSlide key={item.id} className={`${styles.bsDtSwiperInner} ${style.bsDtSwiperInner}`}>
                <div>
                <Image
                className={styles.bestsellerImg} required
                src={item.img}
                alt={item.name} 
                width={290} 
                height={434}              
                />
                </div>
                    
                <div className={styles.bestsellerTextContainer}>
                <p >{item.text}</p>
                </div>
                <div className={styles.bestsellerBtmContainer}>                
                <button className={styles.bestsellerBtm}>У кошик {item.price}</button>
                </div>
            </SwiperSlide>
         
            
        ))}


        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}