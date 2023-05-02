import React, { useEffect, useState } from 'react';
import './Home.css'
import AllChef from '../AllChef/AllChef';
import Slider from '../../Shared/Carusel/Slider';
import AsekedQuestion from '../../Shared/AsekQuestion/AsekedQuestion';
import Lottie from "lottie-react";
import animationlottie2 from '../../assets/45729-chef-animation.json'

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




            <div className='text-center mt-10'>
                <h1 className='text-4xl font-semibold text-gray-600'>Frequently Asked Question?</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 p-10 mx-auto'>
                <div className='mt-10'>
                    <AsekedQuestion></AsekedQuestion>
                </div>


                <div>

                    <div className='w-12/12 mx-auto'>
                        <Lottie animationData={animationlottie2} loop={true} />
                    </div>
                </div>
            </div>




            {/* slider container */}




            <div className='text-center mt-10 mb-5'>
                <h1 className='text-4xl font-semibold text-gray-900'>Our Help</h1>
                <p className='font-semibold my-4'>A recipe website can help us with a variety of things related to cooking and meal preparation.</p>
            </div>
            <div className='grid grid-cols-2'>

                <div className=''>
                    <Slider></Slider>
                </div>

                <div>

                    <div className='mt-5'>
                        <h1 className='font-semibold'>Recipe ideas</h1>
                        <p className='text-sm text-gray-700'> If you are looking for inspiration for what to cook for dinner, a recipe website can be a great resource for finding new and interesting recipe ideas. You can search for recipes based on specific ingredients, dietary restrictions, or cuisine types.</p>
                    </div>

                    <div className='mt-5'>

                        <h1 className='font-semibold'>Cooking tips</h1>
                        <p> A recipe website can also provide helpful cooking tips and techniques to help you improve your culinary skills. For example, you might find tips on how to properly roast a chicken or how to make the perfect homemade pasta.</p>
                    </div>

                    <div className='mt-5'>

                        <h1 className='font-semibold'>Nutritional information</h1>
                        <p> Many recipe websites provide detailed nutritional information for each recipe, which can be helpful for people who are trying to eat a balanced and healthy diet.</p>
                    </div>
                </div>




            </div>



            {/* help email  */}
            {/* <div className='w-96 mx-auto'>
                    <div className='p-10 bg-gray-300 mx-auto'>
                        <h1 className='text-center font-semibold text-sm'>Lets Question in Mind ? Let Us Help You</h1>

                        <div className='flex items-center mt-5 ms-5'>
                            <input className='rounded px-2' type="email" placeholder='Email' name="email" id="" />
                            <button className='ms-1 btn btn-xs'>Email</button>
                        </div>
                    </div>
                </div>  */}


        </div>
    );
};

export default Home;