"use client";
import Image from "next/image";
import HeroMob from "../../public/img/hero/heroMob-3x.png";
import HeroMob2 from "../../public/img/hero/heroMob-1x.png";
import HeroDT1 from "../../public/img/hero/heroDT-3x.jpg";
import HeroDT2 from "../../public/img/hero/heroDT-3x-2.jpg";

import styles from "./swiper.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

export default function SwiperHero() {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper pb-[16px]"
      >
        {/* slider containers */}
        {/* for mobile */}
        <SwiperSlide className={styles.heroMob}>
          {/* className="sm:visible md:hidden lg:!hidden w-screen h-[521px]" */}

          <Image
            src={HeroMob2}
            alt="HeroMob"
            layout="responsive"
            className="min-h-[525px]"
          />
        </SwiperSlide>

        <SwiperSlide className={styles.heroMob}>
          <Image
            src={HeroMob}
            alt="HeroMob"
            layout="responsive"
            className="min-h-[525px]"
          />
        </SwiperSlide>

        {/* For DeskTop */}
        <SwiperSlide className={styles.heroDT}>
          <Image src={HeroDT1} alt="HeroDT1" />
        </SwiperSlide>
        <SwiperSlide className={styles.heroDT}>
          <Image src={HeroDT2} alt="HeroDT2" />
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
