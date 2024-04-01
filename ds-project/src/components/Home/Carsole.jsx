import React,{useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./Style/swiper.css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';

const Carsole = () => {
    const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  return (
    <>
    <Swiper 
    ref={swiperRef}
      
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
    onMouseEnter={handleMouseEnter}
        onClick={handleClick}
   
  >
    
    
    <SwiperSlide>
        <div className="relative w-full h-full mt-20 pt-20">
          <img 
            src="https://ps-beautyshop.myshopify.com/cdn/shop/files/Slider_banner_2_2ce7b884-55c4-4340-86b2-6ee5332c3356.png?v=1613696346"
            alt="slide1"
            className="w-full h-full object-cover"
          />
      <div className="absolute  top-0 md:top-20 right-2 py-8 left-33 md:right-20 flex flex-col items-center justify-center p-10 text-center md:text-right">
      <p className="font-italianno font-cursive  text-black text-md md:text-3xl">Free delivery upto Rs.500</p>
      <h1 className="text-blue-400 font-bold text-2xl md:text-6xl">FASHION 2024</h1>
      <h5 className="text-black text-md md:text-3xl "><>-------------------</>SHOP NOW</h5>
    </div>
        </div>
      </SwiperSlide>
    <SwiperSlide><div className="relative w-full h-full mt-20 pt-20 ">
  <img
    src="https://ps-beautyshop.myshopify.com/cdn/shop/files/Slider_banner_1_2bc6d970-e7ca-43c4-a86b-fc9b25020f62.png?v=1613696346"
    alt="slide1"
    className="w-full h-full object-cover"
  />
  <div className="absolute  top-0 md:top-20 left-2 py-8 left-33 md:left-20 flex flex-col items-center justify-center p-10 text-center md:text-right">
      <p className="font-italianno font-cursive text-black text-md md:text-3xl">OFFER AVALIBLE upto Rs.50%</p>
      <h1 className="text-blue-400 font-bold text-2xl md:text-6xl">FASHION 2024</h1>
      <h5 className="text-black text-md md:text-3xl"><>-------------------</>BEAUTY IMAGE</h5>
      
      </div>
      
</div></SwiperSlide>
    <SwiperSlide><div className="relative w-full h-full mt-20 pt-20 ">
          <img
            src="https://ps-beautyshop.myshopify.com/cdn/shop/files/Slider_banner_1_2bc6d970-e7ca-43c4-a86b-fc9b25020f62.png?v=1613696346"
            alt="slide1"
            className="w-full h-full object-cover"
          />
     <div className="absolute  top-0 md:top-20 left-2 py-8 left-33 md:left-20 flex flex-col items-center justify-center p-10 text-center md:text-right">
      <p className="font-italianno font-cursive text-black text-md md:text-3xl">Free delivery upto Rs.500</p>
      <h1 className="text-blue-400 font-bold text-2xl md:text-6xl">FASHION 2024</h1>
      <h5 className="text-black text-md md:text-3xl"><>-------------------</>SHOP NOW</h5>
    </div>
        </div></SwiperSlide>
    
  </Swiper>
  
    </>
  )
}

export default Carsole
