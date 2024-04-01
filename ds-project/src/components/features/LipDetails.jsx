import React, {useState} from 'react'
import {useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { add } from '../Home/store/cartSlice';
import lipProducts from '../Home/project/Lip';
import CustomerReview from '../CustomerReview';



const LipDetails = () => {
    const {productId} = useParams()
    // const location = useLocation()
    const dispatch = useDispatch();
    const product =  lipProducts && lipProducts.find(prod => prod.id === productId)
    const [selectedImage, setSelectedImage] = useState(product ? product.image[0].imagemod1 : '');
    
    // console.log("Product in EyeDetails:", product);
    // console.log("location state",location.state)

    const addToCart = (product) => {
        dispatch(add(product));
      };  

  return product ?(
    <div className='relative flex flex-col rounded-xl bg-white shadow-lg overflow-hidden  mt-20 pt-20'>
      <div className="rounded-t-xl rounded-l-xl rounded-r-xl relative z-1 text-center" >
        
      <img src={selectedImage} alt={product.name} className='w-80 h-90  object-cover rounded-xl inline-block z-12  py-4 px-3'/>
        {product.image[0] && Object.values(product.image[0]).map((imgSrc, index) => (
        <img key={index} src={imgSrc} alt={`${product.name} ${index+1}`} className='w-20 h-50 object-cover rounded-xl inline-block z-12 py-8 px-3' onClick={() => setSelectedImage(imgSrc)}/>
    ))}
      </div>
      <div className='p-3 px-60 mx-60' >
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

      {/* video 1 */}
      <div className="flex justify-center items-center h-50 bg-white">
      <div className="flex flex-wrap justify-center">
        <div className="h-96 w-80 mx-4 my-4 flex items-center">
          <video className="h-full w-full rounded-lg p-4" controls>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="h-96 w-80 mx-4 my-4 flex items-center">
          <video className="h-full w-full rounded-lg p-4" controls>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="h-96 w-80 mx-4 my-4 flex items-center">
          <video className="h-full w-full rounded-lg p-4" controls>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    <CustomerReview/>
    </div>
    
  ):(
    <div>
       Product Not  Found 
    </div>
    );
}

export default LipDetails
