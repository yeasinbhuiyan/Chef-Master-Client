import React, { useEffect, useState } from 'react';
import './Home.css'
import AllChef from '../AllChef/AllChef';

const Home = () => {
    const [allChef, setAllchef] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chefDetails')
            .then(res => res.json())
            .then(data => setAllchef(data))

    }, [])
    return (
        <div>
            <div className='banner-container'>
                <div className='p-16 text-center'>
                    <h1 className='my-5 text-7xl font-semibold text-gray-200'>Welcome To   <br />Our Bangladeshi
                        <br />
                        Shape Recipes</h1>
                    <p className='text-gray-400'> where you will find a collection of delicious and unique recipes created by a seasoned chef with a passion for good food. From comforting classics to innovative dishes, our recipes are designed to tantalize your taste buds and inspire your culinary creativity. Each recipe comes with detailed instructions and helpful tips to ensure success in the kitchen. Whether you are a novice cook or a seasoned pro, our recipes are approachable, easy to follow, and always packed with flavor. So, grab your apron and get ready to explore the world of culinary delights with us!</p>
                </div>

            </div>


            <div className='text-center mt-28'>
                <h3 className='my-5 text-4xl font-semibold text-gray-600'>Our All Chefs</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-10 mx-auto'>

                {
                    allChef.map(chefDetails => <AllChef key={chefDetails.id} chefDetails={chefDetails}></AllChef>)
                }
            </div>

        </div>
    );
};

export default Home;