import React from 'react'
import { NavLink } from 'react-router-dom'
const Blog = () => {    
    return (
        <div className="max-[1240px] bg-[#FFFFFF]">
            <div className='w-full h-[100px] bg-red-200 relative px-20 flex items-center justify-between'>
                <p className='text-lg'>BLog</p>
                <div className="text-lg">
                    <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/">Home</NavLink>
                    <span className='mx-2'>/</span>
                    <NavLink className={(e) => (e.isActive ? "text-black font-bold text-lg" : "text-black text-lg")} to="/blog">Blog</NavLink>
                </div>
            </div>
            <div className="w-full flex gap-6 px-[100px] py-[80px]">
                <div className="w-[30%] h-[500px]">
                    <div className="w-[100%]  border-2 rounded-lg p-10">
                        <h1 className='text-black font-bold'>RECENT POST</h1>
                        <div className="flex  mb-6">
                            <div className="w-[50%] h-[15vh]">
                                <img className='w-full object-cover h-full' src="https://img.freepik.com/free-photo/overhead-view-woman-s-hand-painting-wooden-house-model-with-paintbrush_23-2148125309.jpg?size=626&ext=jpg" alt="" />
                            </div>
                            <div className="w-[45%] ml-2 ">
                                <h2 className='font-semibold text-black text-black'>JANUARY 10, 2020</h2>
                                <h1 className='text-  text-black'>Lorem ipsum dolor sit amet consectetur.</h1>
                            </div>
                        </div>
                        <div className="flex  mb-6">
                            <div className="w-[50%] h-[15vh]">
                                <img className='w-full object-cover h-full' src="https://img.freepik.com/free-photo/overhead-view-woman-s-hand-painting-wooden-house-model-with-paintbrush_23-2148125309.jpg?size=626&ext=jpg" alt="" />
                            </div>
                            <div className="w-[45%] ml-2 ">
                                <h2 className='font-semibold text-black text-black'>JANUARY 10, 2020</h2>
                                <h1 className='text-  text-black'>Lorem ipsum dolor sit amet consectetur.</h1>
                            </div>
                        </div>
                        <div className="flex  mb-6">
                            <div className="w-[50%] h-[15vh]">
                                <img className='w-full object-cover h-full' src="https://img.freepik.com/free-photo/overhead-view-woman-s-hand-painting-wooden-house-model-with-paintbrush_23-2148125309.jpg?size=626&ext=jpg" alt="" />
                            </div>
                            <div className="w-[45%] ml-2 ">
                                <h2 className='font-semibold text-black text-black'>JANUARY 10, 2020</h2>
                                <h1 className='text-  text-black'>Lorem ipsum dolor sit amet consectetur.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%]  border-2 rounded-lg p-10 mt-8">
                        <h1 className='text-black font-bold'>About</h1>
                        <p className='text-black'>Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus ut augue vel nec justo viverra.</p>
                    </div>
                    <div className="w-[100%]  border-2 rounded-lg p-10 mt-8">
                        <h1 className='text-black font-bold'>RECENT TAGS</h1>
                    </div>
                </div>
                <div className="w-[70%]">
                    <div className="flex items-center mb-6">
                        <div className="w-[50%] h-[50vh]">
                            <img className='w-[100%] object-cover h-[100%]' src="https://img.freepik.com/premium-photo/female-accessories-macaroons-white-background_185193-51032.jpg?w=740" alt="" />
                        </div>
                        <div className="w-[45%] ml-10">
                            <h2 className='font-semibold text-red-200 text-black'>JANUARY 10, 2020</h2>
                            <h1 className='text-lg capitalize text-black'>Lorem ipsum dolor sit amet consectetur.</h1>
                            <div className="flex gap-4">
                                <p className='text-black'>Posted By : ps-beautyshop </p>
                                <span>|</span>
                                <p className='text-black'>0comments</p>
                            </div>
                            <p className='text-black'>Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at urna...</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <div className="w-[50%] h-[50vh]">
                            <img className='w-full object-cover h-full' src="https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXR5fGVufDB8MHwwfHx8MA%3D%3D" alt="" />
                        </div>
                        <div className="w-[45%] ml-10">
                            <h2 className='font-semibold text-red-200 text-black'>JANUARY 10, 2020</h2>
                            <h1 className='text-lg capitalize text-black'>Lorem ipsum dolor sit amet consectetur.</h1>
                            <div className="flex gap-4">
                                <p className='text-black'>Posted By : ps-beautyshop </p>
                                <span>|</span>
                                <p className='text-black'>0comments</p>
                            </div>
                            <p className='text-black'>Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at urna...</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <div className="w-[50%] h-[50vh]">
                            <img className='w-full object-cover h-full' src="https://img.freepik.com/free-photo/overhead-view-woman-s-hand-painting-wooden-house-model-with-paintbrush_23-2148125309.jpg?size=626&ext=jpg" alt="" />
                        </div>
                        <div className="w-[45%] ml-10">
                            <h2 className='font-semibold text-red-200 text-black'>JANUARY 10, 2020</h2>
                            <h1 className='text-lg capitalize text-black'>Lorem ipsum dolor sit amet consectetur.</h1>
                            <div className="flex gap-4">
                                <p className='text-black'>Posted By : ps-beautyshop </p>
                                <span>|</span>
                                <p className='text-black'>0comments</p>
                            </div>
                            <p className='text-black'>Nulla quam turpis, commodo et placerat eu, mollis ut odio. Donec pellentesque egestas consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc at urna...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog