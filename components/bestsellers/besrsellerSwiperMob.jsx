"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Image from "next/image"
import { useState, useEffect } from 'react';



export default function bestsellProd() {

    const [bestSellerData, setBestSellerData] = useState([]);

    useEffect(() => {
      async function fetchBestSellerData() {
        try {
          const response = await fetch('../../public/bestseller.json');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setBestSellerData(data);
        } catch (error) {
          console.error('Error fetching bestseller data:', error);
        }
      }
  
      fetchBestSellerData();
    }, []);

  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {bestSellerData.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item.img} alt={`Slide ${item.name}`} />
            <p>`${item.text}`</p>
            <button>`${item.price}`</button>
          </SwiperSlide>
        ))}
        {/* // <SwiperSlide>
        //   <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        // </SwiperSlide>
        // <SwiperSlide>
        //   <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        // </SwiperSlide>
        // <SwiperSlide>
        //   <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        // </SwiperSlide>
        // <SwiperSlide>
        //   <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        // </SwiperSlide>
        // <SwiperSlide>
        //   <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        // </SwiperSlide> */}
        
      </Swiper>
    </div>
  );
}