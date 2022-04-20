import React from 'react'
import Comp from "../images/comp-bg.png"
const Company = () => {
  return (
    <div className='flex w-full'>
        <div className='w-1/2 h-auto'>
            <img src={Comp} alt="o company"/>
        </div>
        <div className='w-1/2 h-auto flex flex-col justify-center xlx:px-28 bg-[#F1F1F1] text-right'>
            <h2 className='xlx:text-5xl'>О компании</h2>
            <div className='text-base text-[#606060]'>
                <p className='xlx:mt-10'>Мы диджитал агентство занимаемся полным циклом продвижения компаний в интернете.</p>
                <p className='xlx:mt-10'>Разработка сайтов – Сделаем уникальный дизайн согласно вашему фирменному стилю. Напишем чистый код, без использования конструкторов.</p>
                <p className='xlx:mt-10'>Продвижение – поможем вам быстро добиться желаемого результата, обеспечим постоянный приток новых заявок.</p>
            </div>
        </div>
    </div>
  )
}

export default Company