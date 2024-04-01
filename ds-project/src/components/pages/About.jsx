  import React from 'react'
import Aboutone from './Aboutone'
import Abouttwo from './Abouttwo'
import AboutSwaper from './AboutSwaper'
import Team from './Team'
import { NavLink } from 'react-router-dom'



const About = () => {
  return (
    <div className='my-10 py-24'>
      <div className='w-full h-[100px] bg-red-200 relative px-20 flex items-center justify-between '>
        <p className='text-lg'>About</p>
        <div className="text-lg">
          <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/">Home</NavLink>
          <span className='mx-2'>/</span>
          <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/about">About</NavLink>
        </div>
      </div>
      <Aboutone />
      <AboutSwaper />
      <Abouttwo />
      <Team />
    </div>
  )
}

export default About