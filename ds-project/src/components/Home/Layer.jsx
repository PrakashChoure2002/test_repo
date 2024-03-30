import React from 'react';

const Layer = () => {
  return (
    <div className='relative z-10 w-full h-screen flex flex-col justify-center items-end text-center p-10 md:p-20 pl-4'>
    <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-red-300'>BEAUTY</h1>
    <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold mb-4'>HOME DECORATION</h2>
    <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-500'>DEAL OF THE DAY</h3>
  </div>
  
  );
};

export default Layer;

