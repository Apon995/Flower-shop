import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'

function NotFound() {
    return (
        <>
            <div className='w-full h-[70vh] flex items-center justify-center text-center flex-col gap-4'>
                <h1 className='text-5xl text-black font-semibold'>
                    I Have bad
                    news for you<span className='text-5xl'>😟</span>
                </h1>
                <p className='text-sm text-black font-normal'>
                    The page you are looking
                    For might be remove or is
                    temporary unavaible !
                </p>

                <Link className='text-xl font-medium text-[#FF8F52] hover:text-black inline-flex items-center' to='/'> <AiOutlineArrowLeft className='text-2xl'/>  Back to home</Link>

            </div>







        </>
    )
}

export default NotFound