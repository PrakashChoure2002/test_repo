import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Style/productSwiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function CarsoleProduct() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper relative z-10 bg-white"
      >
        <SwiperSlide><img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/Slider_banner_2_2ce7b884-55c4-4340-86b2-6ee5332c3356.png?v=1613696346'   
            alt='slide1'/></SwiperSlide>
        <SwiperSlide><img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/Slider_banner_2_2ce7b884-55c4-4340-86b2-6ee5332c3356.png?v=1613696346'   
            alt='slide1'/></SwiperSlide>
        <SwiperSlide><img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/Slider_banner_2_2ce7b884-55c4-4340-86b2-6ee5332c3356.png?v=1613696346'   
            alt='slide1'/></SwiperSlide>
        <SwiperSlide><img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/Slider_banner_2_2ce7b884-55c4-4340-86b2-6ee5332c3356.png?v=1613696346'   
            alt='slide1'/></SwiperSlide>
        <SwiperSlide><img src='https://ps-beautyshop.myshopify.com/cdn/shop/files/Slider_banner_2_2ce7b884-55c4-4340-86b2-6ee5332c3356.png?v=1613696346'   
            alt='slide1'/></SwiperSlide>
        
      </Swiper>
    </>
  );
}



