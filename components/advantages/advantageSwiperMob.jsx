"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

import Image from "next/image"
import Bustle from "../../public/img/advantages/bustle-3x.png"
import Byrdie from "../../public/img/advantages/byrdie-3x.png"
import Forbes from "../../public/img/advantages/forbes-3x.png"
import Instyle from "../../public/img/advantages/instyle-3x.png"
import Realsimple from "../../public/img/advantages/realsimple-3x.png"




import { Pagination, Navigation } from 'swiper/modules';

export default function advSwiperMob() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='pb-16'> 
            <Image 
            src={Bustle}
            alt="Bustle"
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src={Byrdie}
            alt="Byrdie"
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src={Forbes}
            alt="Forbes"
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src={Instyle}
            alt="Instyle"
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src={Realsimple}
            alt="Realsimple"
            />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}