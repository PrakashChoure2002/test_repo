import React from 'react'

const BeautyImage = () => {
  return (
    <section class="p-4 md:p-10 py-6 md:py-10 relative z-10 m-0 bg-white">
    <div class="flex flex-col md:flex-row justify-center items-center bg-white shadow-lg rounded-lg md:px-8 md:mb-4">
      <img src="https://ps-beautyshop.myshopify.com/cdn/shop/files/beauty_trand_1_a42f410a-0900-4e5f-9ea7-b05be96f5d9b_900x.png?v=1613681498" alt="Product Image" class="w-full md:w-1/2 h-auto md:h-full object-cover rounded-lg md:rounded-l-lg"/>
      <div class="md:w-1/2 p-4 md:p-16 pt-10 md:pt-20">
        <h2 class="text-xl md:text-2xl font-bold mb-4 md:mb-6">BEAUTY TRENDS</h2>
        <p class="text-gray-600 font-semibold text-sm md:text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      </div>
    </div>
  </section>
  
  )
}

export default BeautyImage;
