import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            
            <NavigationBar></NavigationBar>


            <Outlet></Outlet>


            {/* <Footer></Footer> */}
            
        </div>
    );
};

export default MainLayout;