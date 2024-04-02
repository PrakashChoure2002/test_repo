import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 40 }
  ]);

  const removeFromWishlist = id => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div className='bg-white'>
      <div className='w-full h-10 bg-gray-200 relative  px-20 flex items-center justify-between mt-24 py-20'>
        <p className='text-black font-bold text-lg'>Wishlist</p>
        <div className="text-lg">
          <NavLink exact activeClassName="text-black font-bold text-lg" to="/">Home</NavLink>
          <span className='mx-2'>/</span>
          <NavLink exact activeClassName="text-black font-bold text-lg" to="/wishlist">Wishlist</NavLink>
        </div>
      </div>
      <div className="container mx-auto mt-8 ">
        {wishlistItems.length === 0 ? (
          <p className="text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 pb-10">
            {wishlistItems.map(item => (
              <div key={item.id} className="bg-gray-200 rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-700">${item.price}</p>
                <button
                  className="mt-2 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-500 focus:outline-none"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
