// ProductList.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css/autoplay';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from './store/cartSlice';
import { Product } from './project/project';
import Productview from '../Productview';


const ProductList = () => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (item) => {
    dispatch(add(item));
  };

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
  };

  return (
    <div className='flex p-4 items-center justify-center flex-col h-[500] relative bg-white w-full'>
  {selectedProduct ? (
    <Productview
      product={Product.find((item) => item.id === selectedProduct)}
      onClose={() => setSelectedProduct(null)}
      addToCart={addToCart}
    />
  ) : (
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="max-w-full md:max-w-[70%] lg:max-w-[80%] gap-4 "
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {Product.map((item) => (
        <SwiperSlide key={item.id}>
  <div className='relative p-10 flex flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer'>
    <div className="rounded-t-xl rounded-l-xl rounded-r-xl relative z-1" onClick={() => handleProductClick(item.id)}>
        <img src={item.image} alt={item.title} className='w-[70%] h-40 object-cover rounded-xl inline-block z-12 py-8 px-4' />
    </div>
    <div className='p-4 text-center' onClick={() => handleProductClick(item.id)} >
        <h3 className='text-lg font-semibold' >{item.title}</h3>
        <p className='text-gray-700 mt-2'>Price: RS.{item.price}</p>
        <p className='text-gray-700 mt-2'>{item.description}</p>
        
        <button className='bg-blue-900 text-white px-4 rounded-lg mt-4 hover:bg-blue-600' onClick={() => addToCart(item)}>Add To Cart</button>
    </div>
  </div>

        </SwiperSlide>
      ))}
    </Swiper>
  )}
</div>

    
  );
};

export default ProductList;
