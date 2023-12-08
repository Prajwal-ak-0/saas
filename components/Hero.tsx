import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='sm:flex hidden'>
                <div className='w-1/2 mt-32 pl-32'>
                    <div>
                        <h1 className='font-bold lg:text-6xl md:text-4xl w-fit'>
                            Welcome to
                        </h1>
                        <h1 className='ml-20 lg:text-7xl md:text-5xl mt-2 text-[#D801CF] font-extrabold w-fit'>
                            AI Studio!
                        </h1>
                    </div>
                </div>
                <div className='w-1/2 '>

                </div>
            </div>
            <div className='sm:hidden mt-10 flex flex-col'>
                <div className='w-full pl-16'>
                    <div>
                        <h1 className='font-bold text-5xl w-fit'>
                            Welcome to
                        </h1>
                        <h1 className='ml-20 text-6xl text-[#D801CF] font-extrabold w-fit'>
                            AI Studio!
                        </h1>
                    </div>
                </div>
                <div className='w-full'>

                </div>
            </div>
        </>
    )
}

export default Hero