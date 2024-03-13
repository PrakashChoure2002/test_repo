import React from 'react'

const BeautyImage = () => {
  return (
    <section className="p-65 py-10 relative z-10  m-0 bg-white">
    <div className=" w-full h-screen flex flex-col md:flex-row justify-center items-center bg-white shadow-lg rounded-lg px-40 mb-4  ">
    <img src="https://ps-beautyshop.myshopify.com/cdn/shop/files/beauty_trand_1_a42f410a-0900-4e5f-9ea7-b05be96f5d9b_900x.png?v=1613681498" alt="Product Image" className="w-[70%] h-[70%] md:w-[100% ]  object-cover rounded-lg"/>
    <div className="ml-4 p-16 pt-20 " >
      <h2 className="text-xl font-bold mb-2">BEAUTY TRENDS</h2>
      <p className="text-gray-600 font-semibold">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
    </div>
  </div>
  </section>
  )
}

export default BeautyImage;
