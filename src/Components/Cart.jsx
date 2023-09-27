import React, { useEffect, useState } from 'react'
import { deleteproducts, getLocalStroge } from './Utilities/Store'
import { useLoaderData } from 'react-router-dom'
import CartItem from '../Components/CartItem.jsx'



function Cart() {

  const [cart, SetCart] = useState([]);
  const [Total, setTotal] = useState(0)

  const data = useLoaderData();


  useEffect(() => {

    let id = getLocalStroge();

    let arr = [];
    for (let i = 0; i < id.length; i++) {
      let a = id[i];
      let exits = data.find(data => a === data.flower_id);
      arr.push(exits)
    }

    SetCart(arr)

    let a = cart.reduce((i, product) => i + product.flower_price, 0)

    setTotal(a)




  }, [cart.length])

  const handleTodelte = (id) => {
    deleteproducts(id)
    let reamining = cart.filter(item => item.flower_id !== id);


    SetCart(reamining)


  }
  return (
    <>
      <div className='min-h-screen '>
        <div className='flex gap-5 md:flex-row flex-col-reverse'>
          <div className='md:w-[75%]  w-full border-[1px] rounded-md border-[#adadad]  bg-[#FFF] shadow-lg'>
            <div className='px-4 py-4'>
              <h1 className='text-black font-semibold text-xl'>Your Cart {cart.length} </h1>
              <br />
              <br />
              <div>
                {cart.map((item, index) => <CartItem key={index} item={item} handleTodelte={handleTodelte} />)}
              </div>
            </div>


          </div>
          <div className='md:w-[35%] w-full border-[1px] rounded-md  border-[#adadad] h-fit bg-[#FFF] shadow-lg'>

            <div className='px-5 py-4 space-y-5'>
              <p className='text-[#000] lg:text-xl text-base font-normal'>Subtotal for {cart.length} items: $<span className='font-bold'>{Total.toFixed(2)}</span></p>

              <button className='w-full py-2 bg-[#FF8F52] text-white font-medium text-base rounded-lg'>Checkout</button>
            </div>

          </div>
        </div>

      </div>






    </>
  )
}

export default Cart