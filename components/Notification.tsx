import React, { useState } from 'react'

type Props = {}

export default function Notification({}: Props) {

    return(
        <div className='notification rounded-xl bg-green-600 relative left-80 text-white  py-3 px-5 sm:py-4 sm:px-6'>
            <div className='flex items-center gap-3'>
                <p className='font-medium text-sm sm:text-base'>Message successfully sent.</p>
                <i className="fa-regular fa-circle-check flex-grow flex justify-center text-base sm:text-lg"></i>
            </div>
            <p className='text-xs sm:text-sm'>Expect a response tomorrow.</p>
        </div>

    )

}