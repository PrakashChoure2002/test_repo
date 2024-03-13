import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, updateQuantity} from './store/cartSlice';
import { login, logout} from './store/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <div key={item.id} className='flex items-center justify-between p-4 border-b'>
            <div className='flex items-center'>
                <img src={item.image} alt={item.title} className='w-20 h-20 object-cover rounded-lg mr-4' />
                <div>
                    <h3 className='text-lg font-semibold'>{item.title}</h3>
                    <p className='text-gray-700 mt-2'>Price: RS.{item.price}</p>
                    <div className='p-5'>
                        <p className='text-gray-700 mt-2' >
                            {expandedIds[item.id] ? item.description  : `${item.description.substring(0, 50)}...`}
                        </p>
                        <button
                            className='text-blue-500 hover:text-blue-700'
                            onClick={() => toggleDescription(item.id)}>
                            {expandedIds[item.id] ? 'Less' : 'More'}
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-600' onClick={() => removeItem(item.id)}>Remove</button>
                <div className='flex items-center border border-gray-300 rounded-lg px-2'>
                    <button className='text-gray-500 hover:text-gray-700' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <p className='mx-2 text-black'>{item.quantity}</p>
                    <button className='text-gray-500 hover:text-gray-700' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
            </div>
            <div>
                <p className='font-semibold text-black'>Total: RS.{item.quantity * item.price}</p>
            </div>
        </div>
    ));

    return (
        <div>
            <ToastContainer />
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
            {card}
            <div className='flex justify-between p-4 '>
                <div className='p-4'>
                    <p className='font-semibold text-2xl text-blue-500'>Overall Total: RS.{total}</p>
                </div>
                <div className='flex justify-end p-4'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-600'>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
