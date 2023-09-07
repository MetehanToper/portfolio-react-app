import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from '../assest/1.svg'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div className="transition-transform hover:scale-110 mx-2">
          <a href="#">
            <i className="fa-solid  fa-code  fa-lg" style={{ color: "#cc0459" }}>
              <p className="mx-8 block text-gray-300">Mete HAN</p>
            </i>
          </a>
         </div>

        {/*Menü*/}

      
        <ul className='hidden md:flex'>
                <li className='hover:text-pink-600'>
                <Link to='home' smooth={true} duration={500}
                >HOME</Link>
                </li>
                <li className='hover:text-pink-600'>
                <Link to='about' smooth={true} duration={500}
                >ABOUT </Link>
                </li>
                <li className='hover:text-pink-600'>
                <Link to='skills' smooth={true} duration={500}
                >SKİLLS </Link>
                </li>
                <li className='hover:text-pink-600'>
                <Link to='work' smooth={true} duration={500}
                >WORK </Link>
                </li>
                <li className='hover:text-pink-600'>
                <Link to='contact' smooth={true} duration={500}
                >CONTACT </Link>
                </li>
        </ul>
       

        {/*Hamburger*/}
        
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobil Menu*/}
         <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col column justify-center items-center ' } >
                <li className='py-6 text-4'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}
                >HOME</Link>
                </li>
                <li className='py-6 text-4'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}
                >ABOUT</Link>
                </li>
                <li className='py-6 text-4'>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}
                >SKİLLS</Link> 
                </li>
                <li className='py-6 text-4'>
                <Link onClick={handleClick} to='work' smooth={true} duration={500}
                >WORK</Link> 
                </li>
                <li className='py-6 text-4'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}
                >CONTACT</Link>
                </li>
        </ul>
    

        {/*Social İcons*/}
        <div className='hidden fixed lg:flex flex-col top-[35%] left-0'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'> 
                  Linkedin <FaLinkedin  size={30}/>
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'> 
                  Github <FaGithub size={30}/>
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'> 
                  İnstagram <FaInstagram size={30}/>
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'> 
                  Mail <HiOutlineMail size={30}/>
                </a>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar