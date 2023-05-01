import React, { useEffect } from 'react';

const SingleChefRecipes = ({ allRecies }) => {
    const { recipe_name, recipe_id, chef_id, image, ingredients } = allRecies



    

    return (
        <div className='my-10'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='w-96 h-60' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                  
                    <p>{recipe_id}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChefRecipes;