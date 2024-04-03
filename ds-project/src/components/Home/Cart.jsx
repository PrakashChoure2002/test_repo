import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, updateQuantity} from './store/cartSlice';
import { login, logout} from './store/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [expandedIds, setExpandedIds] = useState({});
    const products = useSelector(state => state.cart);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Use auth slice for isLoggedIn

    const dispatch = useDispatch();

    const toggleDescription = (id) => {
        setExpandedIds(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const removeItem = (id) => {
        dispatch(remove(id));
    };


    const handleLogin = () => {
        dispatch(login({ username: 'exampleUser' })); // Replace 'exampleUser' with actual username
        toast.success('Logged in successfully');
    };
    const handleLogout = () => {
        dispatch(logout());
        toast.info('Logged out');
    };
    const updateItemQuantity = (id, quantity) => {
        if (quantity >= 1) {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const total = products.reduce((sum, item) => sum + item.quantity * item.price, 0);
    if (products.length === 0) {
        return (<div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <p className="text-2xl font-semibold text-blue-500">Cart is empty</p>
            </div>
        </div>)
    }

    const card = products.map((item) => (
        <div key={item.id} className='flex items-center border-4 border-gray-300 justify-between p-5 m-5 '>
            <div className='flex items-center'>
                <img src={item.image} alt={item.title} className='w-40 h-40 shadow-lg object-cover rounded-lg mr-10' />
                <div>
                    <h3 className='text-lg font-semibold'>{item.title}</h3>
                    <p className='text-gray-700 mt-2'>Price: RS.{item.price}</p>
                    <div className='p-5'>
                        <p className='text-gray-700 mt-2  text-left' >
                            {expandedIds[item.id] ? item.description : `${item.description.substring(0, 50)}...`}
                        </p>
                        <button
                            className='text-blue-500 hover:text-blue-700 '
                            onClick={() => toggleDescription(item.id)}>
                            {expandedIds[item.id] ? 'Less' : 'More '}
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center border border-gray-300 rounded-lg px-2'>
                    <button className='text-gray-500 hover:text-gray-700' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <p className='mx-2 text-black'>{item.quantity}</p>
                    <button className='text-gray-500 hover:text-gray-700' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
            </div>
            <div>
                <button className='bg-blue-500 text-white px-10 mb-5 py-2 rounded-lg mr-4 hover:bg-blue-600' onClick={() => removeItem(item.id)}>Remove</button>
                <p className='font-semibold text-center text-black'>RS.{item.quantity * item.price}</p>
            </div>
        </div>
    ));

    return (
        <div className='mt-20 p-20 '>
            <ToastContainer />
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
            {card}
            
            <div className='flex pt-15 justify-between p-4 '>
                <div className='p-4'>
                    <p className='font-semibold text-2xl text-blue-500'>Overall Total: RS.{total}</p>
                </div>
                <div className='flex justify-end p-4'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-600' >Checkout</button>
                </div>
            </div>
            <div className='m-10 text-xl '>
            <div className="grid grid-cols-1 mb-10 md:grid-cols-3 gap-6">
                    {/* Premium feature cards */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                        <p className="text-gray-600">Get free shipping on all orders with premium membership.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Exclusive Deals</h3>
                        <p className="text-gray-600">Access exclusive deals and discounts available only to premium members.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Priority Support</h3>
                        <p className="text-gray-600">Receive priority customer support for all your queries.</p>
                    </div>
                </div>

            <span>Switch To </span><Link to='/Premium'> <button className='rounded-xl  bg-red-500 px-4 py-1 hover:bg-blue-600 hover:text-white' >Premiun</button></Link>
            </div>
        </div>
    );
};

export default Cart;
