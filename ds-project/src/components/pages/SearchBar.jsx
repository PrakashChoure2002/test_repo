import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
import { searc } from './search'
import { HiOutlineShoppingCart, HiEye, HiTrash } from 'react-icons/hi';

const SearchBar = () => {

    const cards = searc.map((item) => (
        <div key={item.id} className="relative flex items-center justify-between bg-gray-300 p-4 border-b group  ">
            <div className=" items-center">
                <img src={item.image} alt={item.name} className="w-80 h-80 object-cover rounded-lg mr-4" />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 mt-2">Price: RS.{item.price}</p>
                </div>
            </div>
            <div className="flex flex-col p-2 items-center justify-end absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="text-gray-300 hover:text-blue-500 mr-2 pt-2 transform transition-transform duration-300 hover:scale-150">
          <Link to="/product" className="text-white text-3xl hover:text-blue-500">
            <HiOutlineShoppingCart class="h-5 w-5" />
          </Link>
        </button>
        <button className="text-gray-300 hover:text-blue-500 mr-2 pt-2 transform transition-transform duration-300 hover:scale-150">
          <Link to="/product" className="text-white text-3xl hover:text-blue-500">
            <HiEye class="h-5 w-5" />
          </Link>
        </button>
        <button className="text-gray-300 hover:text-blue-500 mr-2 pt-2 transform transition-transform duration-300 hover:scale-150">
          <Link to="/product" className="text-white text-3xl hover:text-blue-500">
            <HiTrash class="h-5 w-5" />
          </Link>
        </button>
      </div>
        </div>
    ));
 
  return (
    <>
    <div className='max-[1240px] bg-[#FFFFFF] my-20 py-20'>
        <div className='w-full h-[100px] bg-gray-200 relative px-20 flex items-center justify-between'>
                <p className=' text-black font-bold text-lg'>Search</p>
                <div className="text-lg">
                    <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/">Home</NavLink>
                    <span className='mx-2'>/</span>
                    <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/search">Search</NavLink>
                </div>
            </div>
            
    </div>
    <div className="grid p-4 grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 cursor-pointer">
                {cards}
                

            </div>
            
    </>
  )
}

export default SearchBar
