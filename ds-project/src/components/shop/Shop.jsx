import React from 'react'
import Shopone from './Shopone'

const Shop = () => {
    return (
        <div>
            <div className='w-full h-screen bg-red-200 relative pt-16 px-20'>
                <h1 className='font-[pacifico]  md:text-[200px]'>Coming <span className='md:absolute bottom-[16%] right-[10%] '>Soon</span></h1>
            </div>
            <Shopone />
        </div>
    )
}

export default Shop