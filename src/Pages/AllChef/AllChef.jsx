import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllChef = ({ chefDetails }) => {

    const { id, name, image, recipes, experience, likes,bio,recipe_number } = chefDetails
    const [readMore,setreadMore] = useState(false)
    return (
        <div className='mx-auto'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-64' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold">{name}</h2>

                    {
                       !readMore ? <p className='text-sm font-semibold my-2'>{bio.slice(0,150)}<span onClick={()=>setreadMore(!readMore)} className='font-bold text-gray-800 cursor-pointer'>...read More</span></p>:
                       <p className='text-sm font-semibold my-2'>{bio}<span onClick={()=>setreadMore(!readMore)} className='font-bold text-gray-800 cursor-pointer'>...read less</span></p>


                    }
                 <p><span className=' text-lg font-semibold'>Total Recipes:</span><span className='text-lg font-bold ms-2'>{recipe_number}</span></p>

                    <p className=''><span className=' text-xl font-semibold'>Experience:</span><span className='text-xl font-bold ms-2'>{experience}</span></p>
                    <p className='flex items-center'><FaThumbsUp className='text-info'></FaThumbsUp><span className='ms-2 font-semibold'>{likes}</span></p>

                    <div className="card-actions justify-end">

                        <Link to={`/recipes/${id}`}><button className="btn btn-gray w-full mt-5">View Recipes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllChef;