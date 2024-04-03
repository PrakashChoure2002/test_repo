import React, {useState} from 'react'
import {useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { add } from '../Home/store/cartSlice';
import lipProducts from '../Home/project/Lip';
import CustomerReview from '../CustomerReview';
import { FaHeart ,FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';




const LipDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
      setActiveSection(prevSection => (prevSection === section ? null : section));
  };
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
    <div className="grid grid-cols-1 mx-20 md:grid-cols-2 gap-8">
   {/* Left Side: Main Image and Additional Images */}
   <div className="text-center">
   {/* Main Image */}
   <div className="relative px-">
       <img 
           src={selectedImage} 
           alt={product.name} 
           className="w-80 h-90 object-cover rounded-xl inline-block z-12 py-4 px-3 mb-4 hover:scale-110 transition duration-300 transform-gpu" 
       />
       {/* Hover Effect to Enlarge */}
       <div className="absolute inset-0 overflow-hidden rounded-xl border border-gray-300 hover:border-blue-500"></div>
   </div>
   
   {/* Additional Images */}
   <div className="mt-4">
       {product.image[0] && Object.values(product.image[0]).map((imgSrc, index) => (
           <img 
               key={index} 
               src={imgSrc} 
               alt={`${product.name} ${index+1}`} 
               className="w-20 h-50 object-cover rounded-xl inline-block z-12 py-2 px-3 mb-2 cursor-pointer" 
               onClick={() => setSelectedImage(imgSrc)} 
           />
       ))}
   </div>
</div>


   {/* Right Side: Product Details */}
   <div className="px-10">
   <p className="text-black mt-2 font-extrabold text-3xl">{product.name}</p>
   <p className="text-green-700 mt-2 font-semibold text-xl"> $   {product.price}</p>
   <p className="text-gray-700 mt-2 font-medium text-xl">Description: {product.description}</p>
   <h6 className="text-sm text-xl font-semibold text-black mt-2">Category: {product.category}</h6>

   {/* Additional Details */}
   <div className="mt-4">
   {/* Quantity */}
   <div className="flex items-center text-lg ">
       <span className="text-gray-700">Quantity:</span>
       <input type="number" className="w-16 border border-gray-300 rounded-md px-2 py-1 ml-2" defaultValue="1" />
   </div>
   <h2 className='font-semibold mt-5 text-xl'>Available :- <span className='text-green-700'>In Stock</span></h2>

   {/* Add to Cart and Add to Wishlist Buttons */}
   <div className="mt-2">
       <button className="bg-blue-900 text-white px-4 py-2 mb-2 rounded-lg hover:bg-blue-500" onClick={() => addToCart(product)}>Add To Cart</button>
       <button className="bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-600" onClick={() => addToWishlist(product)}>
           <FaHeart/> Add To Wishlist
       </button>
   </div>
<div className="mt-4">
   {/* Share Section */}
   <div className="flex items-center text-xl mt-2">
       <span className="text-gray-700 mr-2">Share:</span>
       <button className="text-blue-600 hover:text-blue-800 mr-4" onClick={() => shareProduct('facebook')}>
           <FaFacebook />
       </button>
       <button className="text-blue-600 hover:text-blue-800 mr-4" onClick={() => shareProduct('linkedin')}>
           <FaLinkedin />
       </button>
       <button className="text-purple-600 hover:text-purple-800 mr-4" onClick={() => shareProduct('instagram')}>
           <FaInstagram />
       </button>
       <button className="text-blue-400 hover:text-blue-600" onClick={() => shareProduct('twitter')}>
           <FaTwitter />
       </button>
   </div>
</div>

</div>
</div>

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

   {/* <FaceCarsoule/> */}


   <div className="container mx-auto py-10">
            {/* Section Toggles */}
            <div className="flex  justify-between p-20 px-80 mb-10">
                <div className="cursor-pointer" onClick={() => toggleSection('description')}>
                    <h2 className={`font-bold  hover:bg-blue-900 hover:text-white px-5  border-2 rounded-lg text-2xl ${activeSection === 'description' ? 'text-blue-500' : 'text-black'}`}>Description</h2>
                </div>
                <div className="cursor-pointer" onClick={() => toggleSection('specification')}>
                    <h2 className={`font-bold  hover:bg-blue-900 hover:text-white px-5 border-2 rounded-lg text-2xl ${activeSection === 'specification' ? 'text-blue-500' : 'text-black'}`}>Specification</h2>
                </div>
                <div className="cursor-pointer" onClick={() => toggleSection('review')}>
                    <h2 className={`font-bold hover:bg-blue-900 hover:text-white px-5 border-2 rounded-lg text-2xl ${activeSection === 'review' ? 'text-blue-500' : 'text-black'}`}>Review</h2>
                </div>
            </div>

            {/* Description Section */}
            {activeSection === 'description' && (
                <div className="border-2 rounded-lg">
                      <p className="text-gray-700 mt-2 font-medium text-xl">Description: {product.description}</p>

                </div>
            )}

            {/* Specification Section */}
            {activeSection === 'specification' && (
                <div className="mb-4">
                    {/* Your specification content goes here */}
                    <p>Specification content goes here...</p>
                </div>
            )}

            {/* Review Section */}
            {activeSection === 'review' && (
                <div className="border-2 rounded-lg">
                  <CustomerReview/>
                </div>
            )}
        </div>

     
   </div>
    
  ):(
    <div>
       Product Not  Found 
    </div>
    );
}

export default LipDetails
