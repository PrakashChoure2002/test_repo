import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom'
import fragranceProducts from '../Home/project/fragrance'
import { useDispatch } from 'react-redux';
import { add } from '../Home/store/cartSlice';

const Fragrance = () => {
    const [filter, setFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
  
  
    const dispatch = useDispatch();
  
  
  
    const addToCart = (product) => {
      dispatch(add(product));
    };
  
    const filteredProducts = fragranceProducts.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase()) &&
      (categoryFilter === '' || product.category === categoryFilter)
    );
    const categories = [...new Set(fragranceProducts.map(product => product.category))];
  
  return (
    <div className='max-[1240px] bg-[#FFFFFF]'>
         <div className='w-full h-[100px] bg-red-200 relative px-20 flex items-center justify-between'>
                <p className='text-lg'>Feature:fragrance</p>
                <div className="text-lg">
                    <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/">Home</NavLink>
                    <span className='mx-2'>/</span>
                    <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/fragrance">Fragrance</NavLink>
                </div>
            </div>
            <div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`border px-4 py-2 ${categoryFilter === '' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
          onClick={() => setCategoryFilter('')}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`border px-4 py-2 ${categoryFilter === category ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
            onClick={() => setCategoryFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-20  p-4 cursor-pointer">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-3 mx-10 flex flex-col items-center">
           <Link to={`/fragrance/${product.id}`}>
            <div className="flex justify-center w-full mb-2">
            <img src={product.image[0].imagemod1} alt={product.name} className="max-h-40 w-auto" />
            </div>
            <div className="text-center">

            
            <p className="font-bold text-black">Name:{product.name}</p>
            <p className="font-bold text-black">Price:{product.price}</p>
            <p className="font-bold text-black">Category:{product.category}</p>
            <p className="font-bold text-black">Description:{product.description}</p>
            <p className="font-bold text-black">Quantity: {product.quantity}</p>
            </div>
            </Link>
            <button
                className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600'
                onClick={() => addToCart(product)}
            >
                ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>

      
    </div>
  )
}

export default Fragrance
