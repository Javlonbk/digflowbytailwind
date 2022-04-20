import React from 'react'
import icon1 from '../images/icons/icon1.png'
import icon2 from '../images/icons/icon2.png'
import icon3 from '../images/icons/icon3.png'
import icon4 from '../images/icons/icon4.png'
import icon5 from '../images/icons/icon5.png'
import icon6 from '../images/icons/icon6.png'
import icon7 from '../images/icons/icon7.png'
import icon8 from '../images/icons/icon8.png'
import icon9 from '../images/icons/icon9.png'
import icon10 from '../images/icons/icon10.png'
import icon11 from '../images/icons/icon11.png'
import icon12 from '../images/icons/icon12.png'
import adventg from '../images/adventg.png'
import award1 from '../images/award1.png'
import award2 from '../images/award2.png'
import award3 from '../images/award3.png'
import award4 from '../images/award4.png'
const Whatofer = () => {
  return (
    <div>
      <div className='w-full text-center 2xlx:px-[353px] lgx:px-40 bg-[#1A1F25] text-white overflow-hidden '>
        <h2 className='xlx:text-5xl xlx:mt-24 lgx:mt-16'>Что мы предлагаем</h2>
        <ul className='flex flex-wrap justify-center xlx:my-20 lgx:my-14'>
          <li className='card border-r-2 border-b-2'>
            <img src={icon1} alt="" className='w-10 h-10 inline' />
            <p className='mt-4 text-base'>Высокий уровень исполнения </p>
          </li>
          <li className='card border-r-2 border-b-2'>
            <img src={icon2} alt="" className='w-10 h-10 inline' />
            <p className='mt-4 text-base'>Гарантируем качество работы </p>
          </li>
          <li className='card border-r-2 border-b-2'>
            <img src={icon3} alt="" className='w-10 h-10 inline' />
            <p className='mt-4 text-base'>Высокий уровень исполнения </p>
          </li>
          <li className='card border-r-2 border-b-2'>
            <img src={icon4} alt="" className='w-10 h-10 inline' />
            <p className='mt-4 text-base'>Обеспечим поток заявок </p>
          </li>
          <li className='card border-b-2'>
            <img src={icon5} alt="" className='w-10 h-10 inline' />
            <p className='mt-4 text-base'>Автоматизируем работу </p>
          </li>
          <li className='card border-r-2 border-b-2'>
            <img src={icon6} alt="" className='w-10 h-10 inline' />
            <p className='mt-4 text-base'>Разработаем уникальный дизайн </p>
          </li>
          <li className='card border-r-2 border-b-2'>
            <img src={icon7} alt="" className='w-10 h-10 inline' />
            <p className='mt-4 text-base'>Напишем чистый
              код  </p>
          </li>
          <li className='card border-r-2 border-b-2'>
            <img src={icon8} alt="" className='w-10 h-10 inline' />
            <p className='mt-4 text-base'>Контекстная
              реклама </p>
          </li>
          <li className='card border-r-2 border-b-2'>
            <img src={icon9} alt="" className='w-10 h-10 inline' />
            <p className='mt-4 text-base'>Третированная реклама я </p>
          </li>
          <li className='card  border-b-2'>
            <img src={icon10} alt="" className='w-10 h-10 inline' />
            <p className='mt-4 text-base'>SEO
              продвижение </p>
          </li>
          <li className='card border-r-2 border-l-2'>
            <img src={icon11} alt="" className='w-10 h-10 inline' />
            <p className='mt-4 text-base'>Продвижение в социальных сетях </p>
          </li>
          <li className='card border-r-2'>

          </li>
          <li className='card border-r-2'>
            <img src={icon12} alt="" className='w-10 h-10 inline' />
            <p className='mt-4 text-base'>Высокий уровень исполнения </p>
          </li>


        </ul>
      </div>

      <div className='w-full text-center 2xlx:px-[353px] 2xlx:pt-80 lgx:px-40 lgx:pt-60 bg-no-repeat bg-center bg-cover overflow-hidden' style={{ backgroundImage: `url(${adventg})` }}>
                <div className='text-left'>
                  <h2 className='xlx:text-5xl xlx:mt-24 lgx:mt-16'>Наши преимущества</h2>
                  <ul className=' xlx:my-20 lgx:my-14 flex flex-wrap'>
                    <li className='flex w-2/5 mr-20 mb-8'>
                       <img className=' lgx:w-10 lgx:h-10' src={award1}/>
                       <span className='text-base text-[#1A1F25] ml-5'>Сделаем адаптивный дизайн, под любой вид устройств</span>
                    </li>
                    <li className='flex w-2/5 mr-20 mb-8'>
                       <img className=' lgx:w-10 lgx:h-10' src={award2}/>
                       <span className='text-base text-[#1A1F25] ml-5'>Установим на сайт счетчики аналитики и настроим возможность отслеживать результаты прямо с вашего мобильного телефонa</span>
                    </li>
                    <li className='flex w-2/5 mr-20 mb-8'>
                       <img className=' lgx:w-10 lgx:h-10' src={award3}/>
                       <span className='text-base text-[#1A1F25] ml-5'>Настроим все возможные способы обратной связи. Заявки на почту, подключим онлайн консультанта, настроим телефонный звон с сайта, подключим Whatsapp к сайту</span>
                    </li>
                    <li className='flex w-2/5 mr-20 mb-8'>
                       <img className=' lgx:w-10 lgx:h-10' src={award4}/>
                       <span className='text-base text-[#1A1F25] ml-5'>Проведем анализ вашей сферы и конкурентов, предложим лучшие инструменты для продвижения в интернете</span>
                    </li>
                  </ul>
                </div>
      </div>
    </div>



  )
}

export default Whatofer