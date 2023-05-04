import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaDiscord, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';



const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-gray-800  to-gray-500'>
        <section className="p-5 m-top footer-bg">

            <div className="grid grid-cols-1 lg:grid-cols-4   p-5">

                <div className="mt-5">
                    <h1 className="font-bold text-gray-100"><Link>SHOP</Link></h1>
                    <ul className="">
                        <li className="mt-3 text-gray-400 font-medium"><Link>Plans</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Food Recipes</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Vagitable Food Item</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Foreign food </Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>PayGo Plan</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Add a Line</Link></li>
                    </ul>



                </div>
                <div className="mt-5">
                    <h1 className="font-bold text-gray-100"><Link>SERVICE FEATURES</Link></h1>
                    <ul className="ul">
                        <li className="mt-3 text-gray-400 font-medium"><Link>Coverage</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>5G</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Features</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>uTalk</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Call China</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Call Mexico</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Call India</Link></li>
                    </ul>



                </div>
                <div className="mt-5">
                    <h1 className="font-bold text-gray-100"><Link>ABOUT Our Chef Recipes</Link></h1>
                    <ul className="ul">
                        <li className="mt-2 text-gray-400 font-medium"><Link>Chefs Specialties</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Healthy Eating</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Global Cuisine </Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Cookie Notice</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Careers</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>In The News</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>FAQ</Link></li>
                        <li className="mt-2 text-gray-400 font-medium"><Link>Recipes Order Status</Link></li>
                    </ul>



                </div>
                <div className="mt-5">
                    <h1 className="font-bold text-gray-100">Subscribe to our newsletter below.</h1>
                    <div className="flex  mt-3">
                 

                        <input className="rounded p-2 text-gray-300" placeholder="Email" type="text" />

                        <button className=" bg-gradient-to-r from-gray-950 to-gray-600 p-3 rounded-lg font-semibold text-white">Sign Up</button>
                    </div>
                    <div className="flex mt-3">




                        

                        <div className='p-2'>
                        <FaDiscord></FaDiscord>

                        </div>
                        <div className='p-2'>
                        <FaInstagram></FaInstagram>

                        </div>

                       

                        <div className='p-2'>
                        <FaTwitter ></FaTwitter>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    </footer>
    );
};

export default Footer;