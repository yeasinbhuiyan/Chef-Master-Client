import React from 'react';
import errorBanner from '/public/5206817.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>

            <div className='lg:w-[30%] text-center  mx-auto '>

                <img src={errorBanner} alt="" />
                <Link to='/'> <button className=' btn btn-warning'>Go Back</button></Link>
            </div>

        </div>
    );
};

export default Error;