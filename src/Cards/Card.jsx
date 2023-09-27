import React from 'react';
import PropTypes from 'prop-types';
import { HandleToaddProducts } from '../Components/Utilities/Store';

function Card({data}) {
    const {flower_name,flower_price,flower_image,flower_id} = data || {}; 

    
    return (
        <>
            <div className='bg-[#FFF] px-4 py-2 rounded-md border-[1px] border-[#adadad]'>
                <img src={flower_image || "./src/assets/flower-1.png"} alt={flower_name} className='h-[190px] w-full rounded-md' />
                <h1 className='text-xl font-semibold text-[#000]'>{flower_name || 'Rose'}</h1>
                <div className='flex items-center justify-between pt-5'>
                    <p className='text-[#838383] text-base font-medium'>{flower_price}$</p>
                    <button onClick={()=> HandleToaddProducts(flower_id)}  className=' hover:text-black font-semibold text-base text-[#FF8F52] cursor-pointer hover:opacity-80'>Add to cart  <i className="fa-solid fa-cart-shopping"></i></button>
                </div>
                <div>

                </div>
            </div>


        </>
    )
}

Card.propTypes = {
    data : PropTypes.object.isRequired,
   
   
    
}

export default Card;