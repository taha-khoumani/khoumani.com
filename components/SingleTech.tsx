import React from 'react'

type Props = {
  techData:{
      title:string,
      name:string,
      description:string,
      link:string,
    }
}

export default function SingleTech({techData}: Props) {
  const {title,name,description,link} = techData

  return (
    <div 
        className='single-tech relative mx-auto rounded-2xl p-4 w-20 h-20 xs:w-24 xs:h-24 sm:p-4.5 lg:w-28 lg:h-28 bg-white' 
    >
      <a target='_blank' href={link} className='lg:hidden'><span className='absolute inset-0'></span></a>
      {/* img */}
      <div 
        className='w-full h-full bg-img' 
        style={{backgroundImage:`url("/techStack/images/${name}.png")`}}
      >
      </div>

      {/* description */}
      <div className='hidden lg:flex flex-col justify-between absolute inset-0 p-1 rounded-2xl backdrop-blur bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition text-center text-black items-center'>
        <p className='cursor-default font-bold text-sm'>{title}</p>
        <p className='cursor-default font-medium text-xxs'>{description}</p>
        <a 
          target='_blank' 
          className='text-xxs underline text-linkBlue flex gap-1 items-center' 
          href={link} 
        >
          see more 
          <i aria-hidden className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

    </div>
  )
}