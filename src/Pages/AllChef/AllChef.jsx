import React from 'react';

const AllChef = ({ chefDetails }) => {
    console.log(chefDetails)
    const{id,name,image,recipes,experience,likes} = chefDetails
    return (
        <div className='mx-auto'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-64 h-64' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>Experience : {experience}</p>
                    <p>Likes: {likes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-gray w-full mt-5">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllChef;