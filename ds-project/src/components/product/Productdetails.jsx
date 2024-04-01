import React from 'react'
import {useParams} from "react-router-dom"
import { add } from '../Home/store/cartSlice';
import { useDispatch } from 'react-redux';

const Productdetails = ({data}) => {
  const dispatch = useDispatch();
    const {itemId} = useParams()
    const item = data && data.find(prod => prod.id === parseInt(itemId))


    const StarRating = ({ rating }) => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        if (i < rating) {
          stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
        } else {
          stars.push(<span key={i} className="text-gray-400">&#9733;</span>);
        }
      }
      return <div className="flex">{stars}</div>;
    };
    const addToCart = (item) => {
      dispatch(add(item));
    };

    
    return item ? (
      <div className='relative flex flex-col rounded-xl bg-white shadow-lg overflow-hidden my-20 py-20'>
      <div className="rounded-t-xl rounded-l-xl rounded-r-xl relative z-1 text-center" >
        
        <img src={item.image} alt={item.title} className='w-50 h-80 object-cover rounded-xl inline-block z-12 py-8 px-4' />
      </div>
      <div className='p-4 text-center' >
        <h3 className=' font-semibold text-base' >{item.title}</h3>
        <p className='text-gray-700 mt-2 font-semibold text-lg'  >Price: RS.{item.price}</p>
        <p className='text-gray-700 mt-2 font-medium text-lg'  >Description:{item.description}</p>
        <h6 className='text-sm font-semibold text-black mt-2'>Category: {item.category}</h6>
        <div className='flex items-center justify-center mt-2'>
                    <p className='text-black font-medium'>Rating:</p>
                    <StarRating rating={item.rating.rate} />
                    <p className='text-black font-medium ml-2'>| In Stock: {item.rating.count}</p>
                </div>
       
       
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600' onClick={() => addToCart(item)}>Add To Cart</button>
        
      </div>
    </div>
      ) : (
        <div>Product not found</div>
      );
}

export default Productdetails
