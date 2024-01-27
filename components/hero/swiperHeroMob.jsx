"use client";
import styles from "./hero.module.scss";
import banerMob from "../../public/json/baners.json";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";

export default function SwiperHero() {
  const [baner, setBaner] = useState([]);
  const images = banerMob;

  const getImages = (images) => {
    const isMobile = innerWidth <= 1200;
    const filter = isMobile
      ? images.filter((image) => image.category === "mobile")
      : images.filter((image) => image.category === "desktop");
    return filter;
  };

  useEffect(() => {
    const filterImages = getImages(images);
    setBaner(filterImages);
  },[] );

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
        {baner.map((image) => (
          <SwiperSlide key={image.id} >
            <Image src={image.img} alt={image.name} width={150} height={150} 
            className={styles.maineBaner}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
