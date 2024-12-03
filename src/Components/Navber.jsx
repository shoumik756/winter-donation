import React, { useContext } from 'react';
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import { AuthContext } from '../Provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    return (

        <div className="max-w-screen-xl mx-auto py-10 px-4 ">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">

                <div className="mb-5 lg:mb-0 flex justify-center lg:justify-start">
                    <Link to="/">
                        <div className="flex items-center justify-center">
                            <img className="w-[35px] h-[35px]" src={logo} alt="Logo" />
                            <h1 className="text-[25px] lg:text-[35px] font-bold ml-2">
                                <span className="text-[#FF6F0F]">Winter</span> Donation
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className="mb-5 lg:mb-0 flex justify-center lg:justify-end">
                    <div className="space-x-4 lg:space-x-8 flex flex-wrap items-center justify-center">
                        <NavLink to="/" className="text-[15px] lg:text-[17px] font-medium">
                            Home
                        </NavLink>
                        <NavLink to="/donationcampaigns" className="text-[15px] lg:text-[17px] font-medium">
                            Donation Campaigns
                        </NavLink>
                        <NavLink to="/howtohelp" className="text-[15px] lg:text-[17px] font-medium">
                            How to Help
                        </NavLink>
                        {
                            user && user?.email ? <NavLink to="/dashboard" className="text-[15px] lg:text-[17px] font-medium">
                            Dashboard
                        </NavLink> : ''
                        }
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">

                    {
                        user && user?.email ? (<div> <img className='w-[45px] h-[45px] rounded-full' src={user?.photoURL} alt="" /> </div>) : 
                        (<div className='text-[45px]'> <FaUserCircle /></div>)
                    }


                    {
                        user && user?.email ? <button onClick={logOut} className="w-[100px] lg:w-[120px] btn bg-[#FF6F0F] text-white text-[15px] lg:text-[17px] font-medium hover:bg-white hover:text-[#FF6F0F]">
                            Logout
                        </button> : <NavLink to='/login'>
                            <button className="w-[100px] lg:w-[120px] btn bg-[#FF6F0F] text-white text-[15px] lg:text-[17px] font-medium hover:bg-white hover:text-[#FF6F0F]">
                                Login
                            </button>
                        </NavLink>
                    }

                </div>
            </div>
        </div>

    );
};

export default Navber;