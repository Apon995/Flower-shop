import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

function LatestPostCard({post}) {
    const {user_name,post_name,post_img,post_date,post_title,likes,post_views} = post ;
    return (
        <>
            <div className='px-3 py-4 bg-[#FFF] shadow-md rounded-md text-[#000]'>
                <div className='flex items-center justify-between pb-3'>
                    <div className='flex items-center gap-2'>
                        <p className='text-xl font-medium'><i className="fa fa-circle-user"></i></p>
                        <p className='font-semibold text-base'>{user_name}</p>
                    </div>
                    <p className='text-[#838383] font-normal text-sm'>{post_date}</p>
                </div>
                <div>
                    <img src={post_img} alt={user_name} />

                    <div className='space-y-2 py-3'>
                        <h1 className='text-xl font-semibold '>{post_name}</h1>
                        <p className='text-[#838383] text-base font-normal'>
                           {post_title}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4 '>
                        <p className='text-[#838383] text-base font-normal'><i className="fa-regular fa-heart"></i> {likes}</p>
                        <p className='text-[#838383] text-base font-normal'><i className="fa-regular fa-eye"></i> {post_views}</p>
                    </div>
                    <div>
                        <Link to='/NotFound' className='hover:text-[#FF8F52] text-base font-medium cursor-pointer'>read more</Link>
                    </div>
                </div>


            </div>



        </>
    )
}
LatestPostCard.propTypes = {
    post : PropTypes.object.isRequired
}

export default LatestPostCard