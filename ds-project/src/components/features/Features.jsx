import React from 'react'
import { NavLink } from 'react-router-dom'

const Features = () => {
    return (
        <div className='max-[1240px] bg-[#FFFFFF] my-20 py-20'>
            <div className='w-full h-[100px] bg-red-200 relative px-20 flex items-center justify-between'>
                <p className='text-lg'>Feature</p>
                <div className="text-lg">
                    <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/">Home</NavLink>
                    <span className='mx-2'>/</span>
                    <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/features">Feature</NavLink>
                </div>
            </div>

            <div className="relative bg-white py-8 w-[90%] p-4 ">
            
               
      <div className="absolute inset-1 flex items-center justify-center left-30 right-20 ">
      
        <div className="bg-white p-4 opacity-55 items-center ">
        <h3 className="text-2xl font-bold mb-2  ">Skin Shine</h3>
        <div className="">
                    <img src='https://themes.muffingroup.com/be/cosmetics/wp-content/uploads/2015/06/home_cosmetics_slider_1_product.png'className='w-[80%] h-80 '/>
                </div>
                
          <h2 className="text-2xl font-bold mb-2  ">Skin Care</h2>
          <p className="mb-2 text-black">This item is great for your skincare routine.</p>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
      </div>
      <div className=" object-none object-left ">
      <img src="https://themes.muffingroup.com/be/cosmetics/wp-content/uploads/2015/06/home_cosmetics_slider_1.jpg" alt="Cosmetics product" className="w-[90%] h-auto " />
      </div>
      
    </div>
    <div className="relative h-screen flex items-center justify-center">
  <div
    className="absolute inset-0 bg-no-repeat bg-center bg-cover flex items-center justify-center"
    style={{ backgroundImage: 'url(https://themes.muffingroup.com/be/cosmetics/wp-content/uploads/2015/06/home_cosmetics_slider_2.jpg)' }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="z-10 text-right p-8">
      <h2 className="text-3xl font-bold text-white">Product Name</h2>
      <p className="mt-2 text-white">Product description goes here.</p>
    </div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src="https://themes.muffingroup.com/be/cosmetics/wp-content/uploads/2015/06/home_cosmetics_slider_1_product.png"
      alt="Product"
      className="w-60 h-full object-contain"
    />
  </div>
</div>



        </div>
    )
}

export default Features