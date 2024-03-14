

// import React from 'react'
// import { Product } from './project/project'
// import {  useDispatch } from 'react-redux'
// import { add } from './store/cartSlice'



// const ProductList = () => {
 
//   const dispatch=useDispatch()

//   const addToCart=(item)=>{
//     // here we dispatch the add ot other function
//     dispatch(add(item))
//     // console.log(add(item))
     
//   }

//   return (
//     <>
//     <div className=' p-4 grid grid-cols-1  sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white cursor-pointer'>
    
//     {Product.map((item) => (
//         <div key={item.id} className='relative flex flex-col rounded-xl bg-gray-200 shadow-lg overflow-hidden transition-transform transform hover:scale-105  '>
//           <div className="bg-black border-slate-500">
//             <img src={item.image} alt={item.title} className=' w-[90%] h-70 object-cover rounded-xl inline-block     bg-black py-8 px-4 mx-4' />
//             </div>
//             <div className='p-4 text-center'>
//                 <h3 className='text-lg font-semibold'>{item.title}</h3>
//                 <p className='text-gray-700 mt-2'>Price: RS.{item.price}</p>
//                 <p className='text-gray-700 mt-2'>{item.description}</p>
//                 <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600' onClick={()=>addToCart(item)}>ADD TO CART</button>
//             </div>
//         </div>
//     ))}
// </div>




// </>

//   )
// }

// export default ProductList



import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination,Autoplay } from "swiper/modules";

import 'swiper/css/autoplay';

// import { RxArrowTopRight } from "react-icons/rx";
import { Product } from './project/project'
import {  useDispatch } from 'react-redux'
 import { add } from './store/cartSlice'

const ProductList = () => {
  const dispatch=useDispatch()

  const addToCart=(item)=>{
//     // here we dispatch the add ot other function
    dispatch(add(item))
  }
  return (
    <div className='flex p-4  items-center justify-center flex-col h-[500] relative bg-white  w-full'>
      <Swiper breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="max-w-[70%] lg:max-w-[80%] gap-4 "
        autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
        >
          {Product.map((item)=>(
            <SwiperSlide key={item.title}>
              <div  className='relativ flex flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
  <div className=" rounded-t-xl rounded-l-xl rounded-r-xl  relative z-1">
    <img src={item.image} alt={item.title} className='w-[80%] h-40 object-cover rounded-xl inline-block z-12  py-8 px-4' />
  </div>
  <div className='p-4 text-center'>
    <h3 className='text-lg font-semibold'>{item.title}</h3>
    <p className='text-gray-700 mt-2'>Price: RS.{item.price}</p>                
    <p className='text-gray-700 mt-2'>{item.description}</p>
    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600' onClick={() => addToCart(item)}>ADD TO CART</button>
  </div>
</div>

            </SwiperSlide>

          ))}


        </Swiper>

      
    </div>
  )
}

export default ProductList






