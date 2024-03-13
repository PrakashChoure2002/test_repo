import React, { useEffect, useState } from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterest } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LiaFaxSolid } from "react-icons/lia";
import vitotaLogo from "../assets/image/vitotoa__logo.png";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);
  return (
    <div className='w-full h-screen bg-[#FFFFFF] relative z-10 md:py-20'>
      <div className="raper w-full min-h-[98%] bg-zinc-800 md:flex gap-20  py-10 px-5 md:px-32 relative">
        <div className="w-[100%] py-6 text-center md:w-[30%] h-[100%] ">
          <img className='ml-[25%] md:ml-10' src={vitotaLogo} alt="" />
          <p className='leading-9 mt-6 text-sm'>It is a long established fact that a <br /> reader will be distracted by the <br /> readable content.Lorem Ipsum is <br /> simply dummy text of been the <br /> industry's standard ...</p>
          <div className="flex ml-20 md:ml-0 gap-1 md:gap-4 mt-6">
            <div className="p-2 bg-white rounded-full"><TiSocialFacebook /></div>
            <div className="p-2 bg-white rounded-full"><FaPinterest /></div>
            <div className="p-2 bg-white rounded-full"><TiSocialTwitter /></div>
            <div className="p-2 bg-white rounded-full"><AiOutlineInstagram /></div>
            <div className="p-2 bg-white rounded-full"><FaLinkedinIn /></div>
          </div>
        </div>
        <div className="anker text-center py-6  w-[100%] md:w-[15%] h-[100%] ">
          <h1>MAIN MENU</h1>
          <a href="">Home</a>
          <a href="">Search</a>
          <a href="">Privicy Policy</a>
          <a href="">Shipping Info</a>
          <a href="">Latest News</a>
          <a href="">Catalog</a>
        </div>
        <div className="anker text-center py-6 w-[100%] md:w-[15%] h-[100%] ">
          <h1>QUICK VIEW</h1>
          <a href="">Best Product</a>
          <a href="">Cosmetics</a>
          <a href="">Beauty World</a>
          <a href="">Offer Collection</a>
          <a href="">Mega Collection</a>
          <a href="">Training Collection</a>
        </div>
        <div className="anker text-center py-6 w-[100%] md:w-[15%] h-[100%] ">
          <h1>links</h1>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
          <a href="">Faq</a>
          <a href="">Portfolio</a>
          <a href="">Search</a>
          <a href="">Wishlist</a>
          <a href="">Lookbook</a>
        </div>
        <div className="anker text-center py-6 w-[100%] md:w-[20%] h-[100%] ">
          <h1>STORE INFO</h1>
          <a href=""><IoLocationOutline className='inline-block' />   Vitota Beauty Store  <br /> Bhopal India</a>
          <a href=""><IoCall className='inline-block' /> Call Us: +918319384910</a>
          <a href=""><MdOutlineEmail className='inline-block' /> Email Us: <br /> support@vitota.in</a>
          <a href=""><LiaFaxSolid className='inline-block' /> Fax: 7582908615</a>
        </div>
        <div className="absolute right-6 bottom-10 p-4 bg-red-400 rounded-full"><a href=""><MdKeyboardDoubleArrowUp /></a></div>
      </div>
      <div className="ftr w-full py-8 px-10 text-black bg-[#FFFFFF]">
        <p className='text-black'>{currentYear} -   Copy Right by XYZ</p>
      </div>
    </div>
  )
}

export default Footer