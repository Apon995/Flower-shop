import React, { useState } from 'react';
import PropTypes from "prop-types";


function CartItem({item,handleTodelte}) {
    const [num, setNum] = useState(0);
   
    const {flower_name,flower_price,flower_image,flower_id} = item || {}; 

   
    
    return (
        <>
            <div className='flex py-2 md:gap-2 md:flex-row flex-col gap-5'>

                <div>
                    <img
                        src={flower_image}
                        alt={flower_name}
                        className=" rounded-md md:w-[150px] w-full my-auto"
                    />
                </div>

                <div className='w-full flex flex-col gap-7'>

                    <div className='flex items-center justify-between '>
                        <p className='text-[#000] font-medium text-[22px] '>{flower_name}</p>
                        <button onClick={()=> handleTodelte(flower_id)} ><i className="fa-solid fa-trash text-[#838383] text-xl cursor-pointer"></i></button>
                    </div>

                    <div className='flex items-center justify-between'>

                        <div>
                            <p className='text-[#838383] text-base'>unit price {flower_price}$</p>
                            <div className=' flex gap-3 border-[1px] w-fit px-3 py-2 border-[#FF8F52] rounded-md font-semibold '>
                                <button onClick={()=> setNum(num + 1 )}><i className="fa-solid fa-plus"></i></button>
                                <span>{num}</span>

                                <button onClick={()=> setNum(num - 1)}><i className="fa-solid fa-minus"></i></button>
                            </div>
                        </div>
                        <h1 className='text-base text-[#000] font-medium '>Total {flower_price}$</h1>

                    </div>
                </div>
            </div>



        </>
    )
}
CartItem.propTypes ={
    item : PropTypes.object.isRequired,
    handleTodelte : PropTypes.func.isRequired,
}
export default CartItem