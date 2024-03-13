import React from 'react'
import shipping from "../pages/image/shipping.png";


const Abouttwo = () => {
    return (
        <div className='pt-[100px] px-10'>
            <div className=" flex justify-evenly  border-black border-t-2 border-b-2 py-10">
                <div className="border-black border-r  md:flex items-center justify-center gap-5  w-[33%]">
                    <div className=""><img src={shipping} alt="" /></div>
                    <div className="mt-2">
                        <h1 className='text-black leading-none'>FREE SHIPPING</h1>
                        <p className='text-black leading-none'>Free Shipping World Wide</p>
                    </div>
                </div>
                <div className="border-black border-r   w-[33%] md:flex items-center justify-center gap-5 ">
                <div className=""><img src={shipping} alt="" /></div>
                    <div className="mt-2">
                        <h1 className='text-black leading-none'>FREE SHIPPING</h1>
                        <p className='text-black leading-none'>Free Shipping World Wide</p>
                    </div>
                </div>
                <div className=" w-[33%] md:flex items-center justify-center gap-5 ">
                <div className=""><img src={shipping} alt="" /></div>
                    <div className="mt-2">
                        <h1 className='text-black leading-none'>FREE SHIPPING</h1>
                        <p className='text-black leading-none'>Free Shipping World Wide</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abouttwo