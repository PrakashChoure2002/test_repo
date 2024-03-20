import React from 'react'
import {useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { add } from '../Home/store/cartSlice';
import skinProducts from '../Home/project/skin';



const SkinDetails = () => {
    const {productId} = useParams()
    // const location = useLocation()
    const dispatch = useDispatch();
    const product =  skinProducts && skinProducts.find(prod => prod.id === productId)
    // console.log("Product in EyeDetails:", product);
    // console.log("location state",location.state)

    const addToCart = (product) => {
        dispatch(add(product));
      };  

  return product ?(
    <div className='relative flex flex-col rounded-xl bg-white shadow-lg overflow-hidden '>
      <div className="rounded-t-xl rounded-l-xl rounded-r-xl relative z-1 text-center" >
        
        <img src={product.image} alt={product.name} className='w-50 h-80 object-cover rounded-xl inline-block z-12 py-8 px-4' />
      </div>
      <div className='p-4 text-center' >
        <h3 className=' font-semibold text-base' >{product.name}</h3>
        <p className='text-gray-700 mt-2 font-semibold text-lg'  >Price: RS.{product.price}</p>
        <p className='text-gray-700 mt-2 font-medium text-lg'  >Description:{product.description}</p>
        <h6 className='text-sm font-semibold text-black mt-2'>Category: {product.category}</h6>
        <div className='flex items-center justify-center mt-2'>
                    {/* <p className='text-black font-medium'>Rating:</p>
                    <StarRating rating={item.rating.rate} />
                    <p className='text-black font-medium ml-2'>| In Stock: {item.rating.count}</p> */}
                </div>
       
       
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600' onClick={() => addToCart(product)}>Add To Cart</button>
        
      </div>
    </div>
  ):(
    <div>
       Product Not  Found 
    </div>
    );
}

export default SkinDetails
