// ProductDetails.jsx
import React from 'react';

const Productview = ({ product, onClose, addToCart }) => {
  if (!product) return null;

  return (
    <div className="p-3 border rounded-lg w-[50%] bg-white  cursor-pointer border-black hover:border-red-400/100 ">
  <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2">X</button>
  
  <div className="rounded-t-xl rounded-l-xl rounded-r-xl relative z-1 text-center flex">
  <div className="mx-12 my-10 px-10 cursor-pointer">
    <p className='text-black font-black cursor-pointer'>Color:</p>
    <select className="border rounded-md p-1 mt-1 cursor-pointer">
      <option value="red" className='text-red-500 cursor-pointer'>Red</option>
      <option value="blue" className='text-blue-500 cursor-pointer'>Blue</option>
      <option value="purple" className='text-purple-500 cursor-pointer'>Purple</option>
    </select>
    <p className='text-black font-black mt-2'>Brand</p>
    <select className="border border-gray-300 rounded-md p-1 mt-1 cursor-pointer">
      <option value="brand1">Brand 1</option>
      <option value="brand2">Brand 2</option>
      <option value="brand3">Brand 3</option>
    </select>
  </div>
  <img src={product.image} alt={product.title} className="w-[40%] h-full object-cover rounded-xl inline-block z-12 py-8 px-4"/>
</div>
  <h1 className=" text-xl font-bold text-center text-black">{product.title}</h1>
  <p className="text-gray-700 text-center font-bold">Price: RS.{product.price}</p>
  <p className="text-gray-700 text-center font-bold">Description:{product.description}</p>
  {/* <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 ">Add to Cart</button> */}

  <div className="flex justify-center items-center">
  <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 ">Add to Cart</button>
</div>
</div>

  );
};

export default Productview;
