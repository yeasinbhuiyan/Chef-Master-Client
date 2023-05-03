import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import SingleChefRecipes from './SingleChefRecipes';
import { FaThumbsUp } from 'react-icons/fa';

const Recipes = () => {
    const navigate = useNavigate()
    const recipes = useLoaderData()

    const { id } = useParams()
    const [chef, setChef] = useState({})


    useEffect(() => {

        fetch(`http://localhost:5000/chefDetails/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
            .catch((error)=>{
                navigate('/error')
            })

            
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 m-10 mx-auto'>


                <div className='mx-auto p-5 md:p-0'>
                    <img className='w-96 h-full rounded' src={chef.image} alt="" />

                </div>

                <div className='mx-auto p-5 md:p-10 lg:p-0'>

                    <h1 className='text-5xl font-semibold'>{chef.name}</h1>

                    <p className='mt-4 text-gray-600 font-semibold'>{chef.bio}</p>

                    <p className='my-5'><span className=' text-xl font-semibold'>Total Recipes:</span><span className='text-xl font-bold ms-2'>{chef.recipe_number}</span></p>
                    <p className='my-5'><span className=' text-xl font-semibold'>Experience:</span><span className='text-xl font-bold ms-2'>{chef.experience}</span></p>

                    <p className='flex items-center'><FaThumbsUp className='text-info'></FaThumbsUp><span className='ms-2 font-semibold'>{chef.likes}</span></p>
                </div>
            </div>




            <div className='p-10'>
                {
                    recipes.map(allRecies => <SingleChefRecipes allRecies={allRecies} key={allRecies.recipe_id}></SingleChefRecipes>)
                }

            </div>

        </div>
    );
};

export default Recipes;