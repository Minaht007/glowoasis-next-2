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
import bestsellerData from "../../public/json/bestseller.json"


export default function bestsellProd() {

    const [data, setData] = useState(bestsellerData);

    // useEffect(() => {
    //   async function fetchBestSellerData() {
    //     try {
    //       const response = await fetch('../../public/bestseller.json');
    //       if (!response.ok) {
    //         throw new Error('Failed to fetch data');
    //       }
    //       const data = await response.json();
    //       setBestSellerData(data);
    //     } catch (error) {
    //       console.error('Error fetching bestseller data:', error);
    //     }
    //   }
  
    //   fetchBestSellerData();
    // }, []);

  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
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
        {data.map((item, index) => (
          <SwiperSlide key={index} className='flex flex-col align-center justify-center text-center pb-6 pt-3' >
            <Image src={item.img} alt={`Slide ${item.name}`} width={350} height={500} className=' mx-auto'/>
            <div className='flex align-center justify-center'>
            <p className='text-center pt-2 pb-2 w-[250px]'>{item.text}</p>
            </div>
            
            <button className='py-2 px-20 border border-1 border-gray-900 bg-addBgColor rounded-md'>{item.price}</button>
          </SwiperSlide>
          
        ))}
      
      </Swiper>
    </div>
  );
}