import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationBar.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)


    const logout = () => {
        logOut()
    }

    return (
        <div className=''>
            <div className='navbar bg-gradient-to-r from-gray-500  to-gray-200 flex  items-center'>

                <div>
                    {!isOpen &&
                        <h1 className=''><span className='text-transparent text-2xl font-semibold bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-700'>Chef</span> <span className='font-semibold'><sub>Master</sub></span></h1>

                    }
                </div>



                <div className='md:flex hidden mx-auto'>


                    <NavLink className={({ isActive }) => isActive ? 'navbar-link' : 'text-black font-semibold'} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'navbar-link' : 'text-black font-semibold'} to='/blog'>Blog</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'navbar-link' : 'text-black font-semibold'} to='/about'> About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'navbar-link' : 'text-black font-semibold'} to='/help'> Help</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'navbar-link' : 'text-black font-semibold'} to='/contact'>Contact</NavLink>



                </div>


                <div className='md:flex hidden items-center'>
                    {user ? <> <img className='rounded-full me-3 cursor-pointer' src={user?.photoURL} width={'40px'} height={'35px'} title={user?.displayName} alt="" /> <button onClick={logout} className='btn btn-xs'>Logout </button></> :
                        <button className='btn btn-xs'><Link to='/login'>Login</Link></button>}
                </div>







                <div className='md:hidden'>

                    <button onClick={() => setIsOpen(!isOpen)} className='btn border-gray-400 bg-gradient-to-r from-gray-600 to-gray-700'> <FaBars></FaBars></button>
                   

                </div>
                {
                    isOpen &&

                    <div className='md:hidden flex flex-col left-0 p-10 top-0 absolute   bg-opacity-70 bg-gradient-to-r from-pink-300 to-yellow-400'>


                        <div className='absolute top-0 left-0'>
                            <button onClick={() => setIsOpen(!isOpen)} className='p-3'>  <FaTimes></FaTimes> </button>
                           

                        </div>

                        <div className='mb-5 p-6'>
                            {user ? <><span className='navbar-link font-semibold' > {user.displayName}</span> <button onClick={logout} className='btn btn-xs'>Logout </button></> :
                                <li className='my-2 list-none text-xl font-semibold'><NavLink className={({ isActive }) => isActive ? 'navbar-link' : 'text-black font-semibold'} to='/login'>Login</NavLink></li>}
                        </div>
                        <li className='my-2 list-none text-xl font-semibold'>
                            <NavLink className={({ isActive }) => isActive ? 'navbar-link' : 'text-black font-semibold'} to='/'>Home</NavLink>
                        </li>

                        <li className='my-2 list-none text-xl font-semibold'>
                            <NavLink className={({ isActive }) => isActive ? 'navbar-link' : 'text-black font-semibold'} to='/Blog'>Blog</NavLink></li>
                        <li className='my-2 list-none text-xl font-semibold'>
                            <NavLink className={({ isActive }) => isActive ? 'navbar-link' : 'text-black font-semibold'} to='/about'> About</NavLink>
                        </li>
                        <li className='my-2 list-none text-xl font-semibold'>
                            <NavLink className={({ isActive }) => isActive ? 'navbar-link' : 'text-black font-semibold'} to='/help'> Help</NavLink>

                        </li>
                        <li className='my-2 list-none text-xl font-semibold'>
                            <NavLink className={({ isActive }) => isActive ? 'navbar-link' : 'text-black font-semibold'} to='/contact'> Contact</NavLink>

                        </li>


                    </div>
                }


            </div>

        </div>
    );
};

export default NavigationBar;