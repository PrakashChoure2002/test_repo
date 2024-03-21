import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../Home/store/cartSlice';
import skinProducts from '../Home/project/skin';

const SkinDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = skinProducts && skinProducts.find(prod => prod.id === productId);

  const addToCart = product => {
    dispatch(add(product));
  };

  return product ? (
    <div className="flex flex-col lg:flex-row rounded-xl bg-white shadow-lg overflow-hidden">
      {/* Left section for product images */}
      <div className="lg:w-1/3 h-1/3 p-4 ml-20 mr-20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
        />
      </div>

      {/* Right section for product details */}
      <div className="lg:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-2xl mb-4">{product.name}</h3>
          <p className="text-gray-700 font-semibold text-lg">Price: RS. {product.price}</p>
          <p className="text-gray-700 font-medium text-lg mt-2">Description: {product.description}</p>
          <p className="text-sm font-semibold text-black mt-2">Category: {product.category}</p>
        </div>
        {/* Additional details section */}
        <div className="mt-4">
          <div className="text-sm text-gray-700 mb-4">Low stock - 417 items left</div>
          {/* Active Offers section */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold text-lg mb-2">Active Offers</h4>
            <ul className="list-disc list-inside">
              <li className="text-sm mb-1">Upto 50% Off</li>
              <li className="text-sm mb-1">Size and color of free gifts may vary. Free Gifts will be removed if the cart value goes below the threshold</li>
              <li className="text-sm mb-1">Free 6 in 1 Beauty Blender on orders above Rs. 399</li>
              <li className="text-sm mb-1">Free Ring Light + 5 in 1 Brush Kit + 6 in 1 Beauty Blender on orders above Rs. 1499</li>
            </ul>
          </div>
        </div>
        {/* Add to cart button */}
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300"
          onClick={() => addToCart(product)}>Add To Cart</button>
      </div>
    </div>
  ) : (
    <div className="text-center mt-8">Product Not Found</div>
  );
};

export default SkinDetails;
