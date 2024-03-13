import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Home/store/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceRangeFilter, setPriceRangeFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState('');
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const dispatch = useDispatch();

    const addToCart = (item) => {
        if (isLoggedIn) {
            dispatch(add(item));
            toast.success('Item added to cart');
        } else {
            // Redirect to login page or show a login modal
            toast.error('Please log in to add items to your cart');
        }
    }

    async function getData() {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError("An error occurred: " + error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return `${description.substring(0, maxLength)}...`;
        }
        return description;
    }

    const filteredData = data.filter(item => {
        const categoryMatch = categoryFilter === '' || item.category.toLowerCase() === categoryFilter.toLowerCase();
        let priceMatch = true;
        if (priceRangeFilter === '0-100') {
            priceMatch = item.price >= 0 && item.price <= 100;
        } else if (priceRangeFilter === 'above 200') {
            priceMatch = item.price > 200;
        } else if (priceRangeFilter === 'above 300') {
            priceMatch = item.price > 300;
        } else if (priceRangeFilter === 'above 500') {
            priceMatch = item.price > 500;
        } else if (priceRangeFilter === 'above 1000') {
            priceMatch = item.price > 1000;
        }
        const titleMatch = searchQuery === '' || item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && priceMatch && titleMatch;
    });

    const card = filteredData.map((item) => (
        <div key={item.id} className='relative flex flex-col rounded-xl bg-white shadow-lg overflow-hidden mx-10 my-5'>
            <img src={item.image} alt={item.title} className='w-full h-60 object-cover rounded-t-xl' />
            <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-800'>{item.title}</h3>
                <p className='text-gray-600 mt-2'>Price: RS.{item.price}</p>
                <p className='text-gray-700 mt-2'>{truncateDescription(item.description, 100)}</p>
                <h6 className='text-sm font-semibold text-gray-500 mt-2'>Category: {item.category}</h6>
                <p className='text-gray-700 mt-2'>
                    Rating: {item.rating.rate} | In Stock: {item.rating.count}
                </p>
                <button
                    className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600'
                    onClick={() => addToCart(item)}
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    ));

    return (
        <div>
            <ToastContainer/>
            <div className="flex space-x-4  p-4 border-slate-950 bg-gray-500">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search by title"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border rounded px-2 py-1 "
                    />
                </div>
                <div>
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="border rounded px-2 py-1"
                    >
                        <option value="">All Categories</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="women's clothing">Women's Clothing</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>
                <div>
                    <select
                        value={priceRangeFilter}
                        onChange={(e) => setPriceRangeFilter(e.target.value)}
                        className="border rounded px-2 py-1"
                    >
                        <option value="">All Price Ranges</option>
                        <option value="0-100">0 - 100</option>
                        <option value="above 200">Above 200</option>
                        <option value="above 300">Above 300</option>
                        <option value="above 500">Above 500</option>
                        <option value="above 1000">Above 1000</option>
                    </select>
                </div>
            </div>
            {error ? (
                <div className="text-red-500 text-center">{error}</div>
            ) : loading ? (
                <div className='text-center text-5xl bg-pink-100'>loading......</div>
            ) : (
                <div className="grid p-4 grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 bg-pink-100">{card}</div>
            )}
        </div>
    );
}

export default Product;
