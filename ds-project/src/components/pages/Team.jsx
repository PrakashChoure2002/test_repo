import React from 'react'

const Team = () => {
    return (
        <div className='px-[80px] pt-[80px]'>
            <h1 className='text-black text-3xl font-bold'>OUR TEAM</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="  text-center">
                    <img src="https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww" alt="" />
                    <div className="">
                        <h1 className='text-red-300 md:text-2xl leading-none mt-2'>Employe</h1>
                        <p className='text-black leading-none'>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div className="  text-center">
                    <img src="https://images.unsplash.com/photo-1619785292559-a15caa28bde6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className="">
                        <h1 className='text-red-300 md:text-2xl leading-none mt-2'>Employe</h1>
                        <p className='text-black leading-none'>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div className="  text-center">
                    <img src="https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className="">
                        <h1 className='text-red-300 md:text-2xl leading-none mt-2'>Employe</h1>
                        <p className='text-black leading-none'>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team