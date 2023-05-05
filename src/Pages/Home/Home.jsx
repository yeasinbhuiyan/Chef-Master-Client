import React, { useEffect, useState } from 'react';
import './Home.css'
import AllChef from '../AllChef/AllChef';
import Slider from '../../Shared/Carusel/Slider';
import AsekedQuestion from '../../Shared/AsekQuestion/AsekedQuestion';
import Lottie from "lottie-react";
import animationlottie2 from '../../assets/45729-chef-animation.json'
import { Link, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import {  FaArrowRight } from 'react-icons/fa';
import FeedBack from '../../Shared/FeedBack/FeedBack';

const Home = () => {

    const navigation = useNavigation()
    console.log(navigation)

    const [allChef, setAllchef] = useState([])
    useEffect(() => {
        fetch('https://chef-master-server-yeasinbhuiyan.vercel.app/chefDetails')
            .then(res => res.json())
            .then(data => setAllchef(data))

    }, [])


    if (navigation.state === 'loading') {
        return (<LoadingSpinner></LoadingSpinner>)

    }




    return (
        <div>

            {/* banner section  */}
            <div className='banner-container'>
                <div data-aos="fade-up" className='md:p-16 p-6 text-center'>
                    <h1 className='md:my-5 text-4xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-pink-700'>Welcome To   <br />Our Chef Master 
                        <br />
                         Recipes</h1>

                    <p className='mt-5 text-gray-400 font-medium'> where you will find a collection of delicious and unique recipes created by a seasoned chef with a passion for good food. From comforting classics to innovative dishes, our recipes are designed to tantalize your taste buds and inspire your culinary creativity. Each recipe comes with detailed instructions and helpful tips to ensure success in the kitchen. Whether you are a novice cook or a seasoned pro, our recipes are approachable, easy to follow, and always packed with flavor. So, grab your apron and get ready to explore the world of culinary delights with us!</p>
                </div>

            </div>





            {/* all chef container */}



            <section>
                <div className='text-center mt-28'>
                    <h3 className='my-5 text-4xl font-semibold text-gray-600'>Our All Chefs</h3>
                    <hr className='w-16 border-solid border-y mx-auto text-bold  text-cyan-900 mt-3' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-7 md:p-10 mx-auto'>

                    {
                        allChef.map(chefDetails => <AllChef key={chefDetails.id} chefDetails={chefDetails}></AllChef>)
                    }
                </div>


            </section>


            {/* Commonly asked question container */}


            <section>
                <div className='text-center p-5 md:p-1 mt-28'>
                    <h1 className='text-4xl font-semibold text-gray-600'>Commonly Asked Question?</h1>
                    <p className='font-semibold text-sm mt-3'>You may find here some Commonly asked questions that may help you a lot and we have answered the questions below.</p>
                </div>
                <div className='lg:grid lg:grid-cols-2 p-10 mx-auto flex flex-col-reverse '>
                    <div className='mt-5'>
                        <AsekedQuestion></AsekedQuestion>
                    </div>


                    <div>

                        <div className='w-12/12 mx-auto'>
                            <Lottie animationData={animationlottie2} loop={true} />
                        </div>
                    </div>
                </div>

            </section>




            {/* slider container */}
            <section>

                <div className='text-center p-6 md:p-1 mt-28 mb-5'>
                    <h1 className='text-4xl font-semibold text-gray-900'>Our Help</h1>
                    <p className='font-semibold text-sm my-4'>A recipe website can help us with a variety of things related to cooking and meal preparation.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 mb-28'>
                    <div data-aos="fade-up"  className='mx-auto'>
                        <Slider></Slider>
                    </div>

                    <div  className='mx-auto lg:mt-0 mt-3 lg:p-1 p-4 md:px-5'>

                        <div data-aos="fade-up" >
                            <h1 className='font-semibold'>Recipe ideas</h1>
                            <p className='text-sm text-gray-700'> If you are looking for inspiration for what to cook for dinner, a recipe website can be a great resource for finding new and interesting recipe ideas. You can search for recipes based on specific ingredients, dietary restrictions, or cuisine types.</p>
                        </div>

                        <div data-aos="fade-up"  className='mt-5'>

                            <h1 className='font-semibold'>Cooking tips</h1>
                            <p className='text-sm text-gray-700'> A recipe website can also provide helpful cooking tips and techniques to help you improve your culinary skills. For example, you might find tips on how to properly roast a chicken or how to make the perfect homemade pasta.</p>
                        </div>

                        <div data-aos="fade-up"  className='mt-5'>

                            <h1 className='font-semibold'>Nutritional information</h1>
                            <p className='text-sm text-gray-700'>Many recipe websites provide detailed nutritional information for each recipe, which can be helpful for people who are trying to eat a balanced and healthy diet.</p>
                        </div>

                     
                        <div data-aos="fade-up"  className='mt-8'>
                            <Link to='/help'> <button className='btn btn-outline  btn-warning'>read more<FaArrowRight className='ms-2'></FaArrowRight></button></Link>
                        </div>


                    </div>




                </div>


            </section>


<FeedBack></FeedBack>

           



        </div>
    );
};

export default Home;