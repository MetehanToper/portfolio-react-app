import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] z-10'>

        {/*Container */}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mete Han TOPER</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm Frontend Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'> I’m a frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.</p>
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work <HiArrowNarrowRight className='ml-3'/></button>
            </div>    
        </div>



    </div>
  )
}

export default Home