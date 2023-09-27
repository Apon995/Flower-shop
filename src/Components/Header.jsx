import React, { useState } from 'react';
import { Outlet, NavLink, useNavigation } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import Footer from "./Footer.jsx"



function Header() {
    const navigation = useNavigation();
    const [ismenu , setIsMenu] = useState(false);

   const handleToggleNav=()=>{
    if(!ismenu){
        document.getElementById('navIcons').classList.remove('top-[-60%]');
        document.getElementById('navIcons').classList.add('top-[10%]');
        document.getElementById('cartIcons').classList.remove('top-[-15%]')
        document.getElementById('cartIcons').classList.add('top-[12%]')
    }
    else{
        document.getElementById('navIcons').classList.remove('top-[10%]');
        document.getElementById('navIcons').classList.add('top-[-60%]')
        document.getElementById('cartIcons').classList.add('top-[-15%]')
        document.getElementById('cartIcons').classList.remove('top-[12%]')
    }
    setIsMenu(!ismenu);

    
   }
    return (
        <> 
            <header className=' bg-[#FFF] shadow-sm px-[5%]' >
                <nav className='flex items-center justify-between py-4 h-fit'>
                    <h1 className='text-[#000] font-semibold text-3xl'><span className='text-[#FF8F52]'>Flower</span>Shop</h1>

                   <div className='md:hidden block'>
                     <button onClick={handleToggleNav} className='text-2xl text-black font-semibold cursor-pointer'>
                        {
                            ismenu ? <AiOutlineClose/> : <AiOutlineMenu/>
                        }
                        
                     </button>
                   </div>

                    <div id='navIcons' className='md:static absolute top-[-60%] left-0 w-full md:w-fit md:bg-inherit bg-white md:shadow-none shadow-md md:py-0 py-8 border-[1px] border-[#adadad] md:border-none rounded-md md:rounded-none duration-500 z-10'>
                        <ul className='flex md:flex-row flex-col gap-2 items-center text-xl font-medium text-[#000]' id='routeLink'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/Shop'>Shop</NavLink></li>
                            <li><NavLink to='/Blog'>Blog</NavLink></li>
                            <li><NavLink to='/About'>About</NavLink></li>

                        </ul>
                    </div>
                    <div className='md:static absolute top-[-15%] left-0 right-0 z-10 duration-500' id='cartIcons'>
                        <ul className='flex md:gap-4 gap-[13rem] px-2 md:px-0 items-center justify-center md:justify-normal text-[#FF8F52]' id='cart-Or-profileLink'>
                            <li><NavLink to="/Profile" className='md:text-xl text-2xl' ><i className="fa fa-circle-user"></i></NavLink></li>
                            <li><NavLink to="/Cart" className='md:text-xl text-2xl' ><i className="fa-solid fa-cart-shopping"></i></NavLink></li>
                        </ul>
                    </div>

                </nav>
            </header>
            <main className='lg:px-[5%] md:px-[3%] px-[2%] py-8'>
                {
                    navigation.state == 'loading' ? <div className='w-full h-[80Vh] flex items-center justify-center'>
                        <Oval
                            height={90}
                            width={90}
                            color="#FF8F52"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#FF8F52"
                            strokeWidth={4}
                            strokeWidthSecondary={3}

                        />

                    </div> : <Outlet />

                }

            </main>
            <br />
            <footer>
            <Footer />

            </footer>




        </>
    )
}

export default Header;