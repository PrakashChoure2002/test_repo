import React from 'react'
import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
 import '../pages/Style/Swiper.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const AboutSwaper = () => {

    return (
        <Swiper
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
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className='text-black bg-[#FFFFFF]'>
                <div className="mr-10">
                    <div className="w-[100px] h-[100px] bg-sky-300 rounded-full mb-2"></div>
                    <p className='text-black'>Employe</p>
                    <p className='text-black'>designation</p>
                </div>
                <p className='text-start text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea consectetur aut repudiandae cupiditate odit a, similique dicta <br /> facilis voluptas velit!</p>
            </SwiperSlide>
            <SwiperSlide className='text-black bg-[#FFFFFF]'>
                <div className="mr-10">
                    <div className="w-[100px] h-[100px] bg-sky-300 rounded-full mb-2"></div>
                    <p className='text-black'>Employe</p>
                    <p className='text-black'>designation</p>
                </div>
                <p className='text-start text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea consectetur aut repudiandae cupiditate odit a, similique dicta <br /> facilis voluptas velit!</p>
            </SwiperSlide>
            <SwiperSlide className='text-black bg-[#FFFFFF]'>
                <div className="mr-10">
                    <div className="w-[100px] h-[100px] bg-sky-300 rounded-full mb-2"></div>
                    <p className='text-black'>Employe</p>
                    <p className='text-black'>designation</p>
                </div>
                <p className='text-start text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea consectetur aut repudiandae cupiditate odit a, similique dicta <br /> facilis voluptas velit!</p>
            </SwiperSlide>
            {/* <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide> */}
            {/* <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
    )
}

export default AboutSwaper