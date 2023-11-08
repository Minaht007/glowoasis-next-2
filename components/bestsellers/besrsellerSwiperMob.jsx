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
          <SwiperSlide key={index} className='flex flex-col align-center pb-6 pt-3' >
            <Image src={item.img} alt={`Slide ${item.name}`} width={250} height={400} className=' mx-auto'/>
            <p className='pt-2 pb-2'>{item.text}</p>
            <button className='py-2 px-10 border border-1 border-gray-900 bg-addBgColor rounded-sm'>{item.price}</button>
          </SwiperSlide>
          
        ))}
        {/* // <SwiperSlide>
        //   <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        // </SwiperSlide>
        */}
        
      </Swiper>
    </div>
  );
}