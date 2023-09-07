import React from 'react'

import JavaScript from '../assest/javascript.png'
import Aws from '../assest/aws.png'
import Css from '../assest/css.png'
import Github from '../assest/github.png'
import Html from '../assest/html.png'
import Reactt from '../assest/react.png'
import Tailwind from '../assest/tailwind.png'
import Bootstrap from '../assest/bootstrap.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>    
                <p className='text-4xl font-bold border-b-4 inline border-pink-600  '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt='Html'></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Css} alt='Css'></img>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='Javascript'></img>
                    <p className='my-4'>JAVASCRİPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind'></img>
                    <p className='my-4'>TAİLWİND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt='Bootstrap'></img>
                    <p className='my-4'>BOOTSTRAP</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Reactt} alt='React'></img>
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt='Github'></img>
                    <p className='my-4'>GİTHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Aws} alt='AWS'></img>
                    <p className='my-4'>AWS</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Skills