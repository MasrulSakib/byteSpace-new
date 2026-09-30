import React from 'react'

const Hero = () => {
    return (
        <main className='navbar-grid bg-[#003BE2] max-h-256 h-256 w-full flex justify-center'>
            <div className='flex flex-col h-full items-center mt-12.25'>
                <div className='flex flex-col text-center px-4 mt-12.25 space-y-8'>
                    <h1 className='text-white text-7xl font-poppins font-semibold max-w-233.75 tracking-[-1%] leading-[120%]'>Get Access to Hundreds Courses Available</h1>
                    <p className='text-white font-satoshi text-[18px]'>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
                </div>
                <div className='flex items-center justify-center w-full'>
                    <form className="flex items-center gap-4 max-w-[552px] max-h-[52px] w-full h-full mt-15">
                        <div className="flex items-center w-full h-[52px] bg-white rounded-full px-6">
                            <input
                                type="text"
                                placeholder="Course, topic, creator"
                                className="pointer-events-auto ml-3 w-full bg-transparent outline-none border-none text-gray-700 font-satoshi text-[18px] placeholder:text-gray-500"
                            />
                        </div>

                        <button type='submit' className="w-[104px] h-[46px] bg-[#D4FB20] rounded-3xl font-satoshi">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Hero