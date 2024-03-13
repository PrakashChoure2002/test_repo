import React, { useState } from 'react';
import { products } from '../Home/project/portfolio';
import { NavLink } from 'react-router-dom';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All" 
    ? products.flatMap(category => category.items) // Return all items when "All" is selected
    : products.find(category => category.category === selectedCategory)?.items || [];

  return (
    <div className="container mx-auto py-4">
      <div className='w-full h-[100px] bg-red-200 relative px-20 flex items-center justify-between'>
          <p className='text-lg'>Portfolio</p>
          <div className="text-lg">
              <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/">Home</NavLink>
              <span className='mx-2'>/</span>
              <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/blog">Portfolio</NavLink>
          </div>
      </div>

      <h2 className="md:pb-15 relative mt-20 text-3xl md:text-4xl text-gray-900 uppercase font-bold tracking-wider text-center  mx-auto">Portfolio</h2>
      
      <div className="flex justify-center py-2 ">
        <button onClick={() => handleCategoryClick("All")} className={`mx-2 py-2 px-4 rounded-lg focus:outline-none ${selectedCategory === "All" ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"}`}>All</button>
        {products.map(category => (
          <button 
            key={category.category} 
            onClick={() => handleCategoryClick(category.category)} 
            className={`mx-2 py-2 px-4 rounded-lg focus:outline-none ${selectedCategory === category.category ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            {category.category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-10">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Portfolio;
