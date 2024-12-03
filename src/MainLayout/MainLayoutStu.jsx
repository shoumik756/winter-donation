import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';

const MainLayoutStu = () => {
    return (
        <div>
            <div className='bg-[#f2f2f2]'>
                <Navber></Navber>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayoutStu;