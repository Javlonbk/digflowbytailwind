import React from 'react'
import Portfo from '../images/portfolio.png'
const Portfolio = () => {
  return (
    <div className='w-full text-center 2xlx:px-[353px]  lgx:px-40  overflow-hidden'>
        <h2 className='xlx:text-5xl xlx:mt-24 lgx:mt-16'>Портфолио</h2>
        <div className='xlx:mt-16 lgx:mt-12 relative'>
            <img src={Portfo} alt="" />
            <div className='flex items-center justify-center  2xlx:mt-52 mdx:mt-10 xs:mt-12 border-2 border-black box-border md:w-64 md:h-16 xs:w-56 xs:h-12 text-black absolute top-36 right-8'>
                            <a href="/" className=' flex justify-between items-center'>
                                <span className='md:text-base xs:text-sm'>Спец предложение</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className=" md:w-5 md:h-5 xs:w-4 xs:h-4 ml-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

            </div>
        </div>
    </div>
  )
}

export default Portfolio