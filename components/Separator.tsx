import React from 'react'

type Props = {}

export default function Separator({}: Props) {
  return (
    <div className='w-full '>
        <div 
            className='
                bg-black 
                bg-opacity-25
                general-margins
            ' 
            style={{height:'1px'}}
        >
        </div>
    </div>
  )
}