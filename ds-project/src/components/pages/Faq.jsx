import React from 'react'
import { NavLink } from 'react-router-dom'
import FaqData from './FaqData'

const Faq = () => {
  return (
    <div className='max-[1240px] bg-[#FFFFFF]  my-20 py-20'>
        <div className='w-full h-[100px] bg-gray-200 relative px-20 flex items-center justify-between'>
                <p className=' text-black font-bold text-lg'>FAQ</p>
                <div className="text-lg">
                    <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/">Home</NavLink>
                    <span className='mx-2'>/</span>
                    <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/faq">FAQ</NavLink>
                </div>
            </div>
            <FaqData/>




      
    </div>
  )
}

export default Faq
