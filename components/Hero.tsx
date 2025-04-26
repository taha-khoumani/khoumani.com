import { scrollTo } from '@/lib/helpers';
import React from 'react'


type Props = {}

export default function Hero({}: Props) {

  return (
    <div className='flex flex-col gap-10 mx-4 sm:mx-16 lg:mx-24 lg:flex-row lg:justify-around'> 
        <div className='mx-auto sm:text-center sm:mx-0 lg:text-left'>
            <h1 className='text-black font-bold text-2xl xs:text-4xl mb-4 sm:text-5xl sm:mb-6 lg:mb-8 whitespace-nowrap lg:text-5.5xlxl lg2:text-6xl' >
                Transforming Project 
                <br/>
                <span className='text-turk1' > Ideas</span>  into Functional 
                <br/>
                <span className='text-blue1' > Websites</span>
            </h1>
            <p className='text-black mb-6 max-w-xs xs:max-w-none text-xs xs:text-sm sm:mb-10 lg:mb-14'>
                Welcome! I'm 
                <span className='myname font-bold'> Taha K</span>
                , a front-end developer dedicated <br className='hidden xs:block'/> to creating appealing and functional websites that stand out. <br className='hidden xs:block' />  Let's work together to turn your project ideas into reality!
            </p>
            <button 
                className='btn gap-5 mr-auto mini-button-text w-full sm:w-80 sm:mx-auto lg:mx-0' 
                onClick={()=>scrollTo('websites')}
            >
                <span>Explore my projects</span>
                <i aria-hidden className="fa-regular fa-circle-down text-lg items-baseline"></i>
            </button>
        </div>
        <div className='hero-img mx-auto w-full h-80 lg:my-auto lg:w-auto lg:self-stretch lg:bg-right lg:aspect-square lg:mx-0'></div>
    </div>
  )
}