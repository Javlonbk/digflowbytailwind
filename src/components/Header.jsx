import React, { useState } from 'react'
import Logo from '../images/logo.png'
import Headerbg from '../images/header-bg.png'
import {FaTelegramPlane} from "react-icons/fa";

const Header = () => {
    const [open, setOpen] = useState(false);
    function openBar() {
        setOpen(true)
    }
    function closeBar(params) {
        setOpen(false)
    }
    return (
        <div className='relative header 2xlx:px-[353px] 2xlx:pt-6 xs:object-center xs:w-full xs:h-screen  xs:px-6 xs:py-6 lgx:px-40 lgx:py-10 mdx:px-24 smx:px-20   bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${Headerbg})` }}>

            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <a href="/"><img src={Logo} className="xs:w-8" alt="" /></a>
                    <a href="/" className='xlx:text-3xl xs:text-xl ml-2 '><h4>Digital Flow</h4></a>
                </div>
                <svg onClick={openBar} xmlns="http://www.w3.org/2000/svg" className="lgx:w-8 lgx:h-8 xs:w-6 xs:h-6 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>


            <div style={open === true ? {"display":"block"} : null} className='flex-col  pt-11 px-20 box-border absolute top-0 right-0 xlx:w-1/3 mdx:w-1/2 xs:w-full h-full bg-[#191A1E] text-gray-400 hidden'>

                <svg onClick={closeBar} xmlns="http://www.w3.org/2000/svg" className="lgx:w-8 lgx:h-8 xs:w-6 xs:h-6 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                <ul className='mdx:mt-12 xs:mt-6 xs:text-base'>
                    <li className='2xlx:mt-10 xs:mt-5'><a href="/">
                        Главная
                    </a></li>
                    <li className='2xlx:mt-10 xs:mt-5'><a href="/">
                        О компании
                    </a></li>
                    <li className='2xlx:mt-10 xs:mt-5'><a href="/">
                        Портфолио
                    </a></li>
                    <li className='2xlx:mt-10 xs:mt-5'><a href="/">
                        Что мы предлагаем
                    </a></li>
                    <li className='2xlx:mt-10 xs:mt-5'><a href="/">
                        Специальное предложение
                    </a></li>
                    <li className='2xlx:mt-10 xs:mt-5'><a href="/">
                        <div className='flex items-center justify-center  2xlx:mt-52 xs:mt-24 box-border md:w-64 md:h-16 xs:w-56 xs:h-12 text-white' style={{ "background": "linear-gradient(90deg, #074D88 0%, #61B3C9 100%)" }}>
                            <a href="/" className=' flex justify-between items-center'>
                                <span className='md:text-base xs:text-sm'>Спец предложение</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-5 md:h-5 xs:w-4 xs:h-4 ml-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                        </div>
                    </a></li>
                    <li className=' text-lg flex md:mt-32 xs:mt-20'>
                        <a href="/" className='md:w-8 md:h-8 xs:w-6 xs:h-6 bg-white flex items-center justify-center rounded-md mr-3'><FaTelegramPlane /></a>
                        <a href="/" className='md:w-8 md:h-8 xs:w-6 xs:h-6 bg-white flex items-center justify-center rounded-md mr-3'><FaTelegramPlane /></a>
                        <a href="/" className='md:w-8 md:h-8 xs:w-6 xs:h-6 bg-white flex items-center justify-center rounded-md mr-3'><FaTelegramPlane /></a>
                        <a href="/" className='md:w-8 md:h-8 xs:w-6 xs:h-6 bg-white flex items-center justify-center rounded-md mr-3'><FaTelegramPlane /></a>
                        <a href="/" className='md:w-8 md:h-8 xs:w-6 xs:h-6 bg-white flex items-center justify-center rounded-md mr-3'><FaTelegramPlane /></a>
                        
                        
                    </li>
                </ul>
            </div>



            <div className='flex justify-center items-center 2xlx:mt-44 lgx:mt-20 xs:mt-28'> 
                <div className=' text-center flex flex-col items-center'>
                    <h1 className=' 2xlx:text-7xl lgx:text-5xl xs:text-4xl uppercase'>web applications</h1>
                    <h5 className=' lg:text-lg xs:text-base mt-5'>Повседневная практика.</h5>
                    <div className='flex items-center justify-center  2xlx:mt-52 mdx:mt-10 xs:mt-12 border-2 border-black box-border md:w-64 md:h-16 xs:w-56 xs:h-12 text-black' >
                            <a href="/" className=' flex justify-between items-center'>
                                <span className='md:text-base xs:text-sm'>Спец предложение</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-5 md:h-5 xs:w-4 xs:h-4 ml-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header