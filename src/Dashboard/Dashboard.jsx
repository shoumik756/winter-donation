import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='max-w-screen-xl mx-auto my-20 px-4 flex justify-center items-center '>
            <div className='border-2 border-[#ff6f0f] w-[600px] rounded-2xl bg-white space-y-5 flex-col p-10'>
                <h1 className='text-[30px] font-semibold'>Welcome to the Dashboard <span className='text-[#ff6f0f]'>{user?.displayName}!</span></h1>
                {
                    user && user?.email ? (<div className=''>
                        <div className='flex justify-center items-center mb-5'>
                            <img className='w-[250px] h-[250px]  rounded-full' src={user?.photoURL} alt="" />
                        </div>
                        <p className='flex items-center text-[25px] gap-2'><FaUserCircle />{user?.displayName}</p>
                        <p className='flex items-center text-[25px] gap-2'><MdEmail />{user?.email}</p>

                    </div>) :
                        ''
                }
                <NavLink to='/updateinformation'><button className='btn mt-5 bg-[#ff6f0f] text-white w-full hover:text-black'>Update</button></NavLink>
            </div>
        </div>
    );
};

export default Dashboard;







// {
//     user && user?.email ? (<div>
//         <h1>{user?.displayName}</h1>
//         <h1>{user?.email}</h1>
//         <img className='w-[45px] h-[45px] rounded-full' src={user?.photoURL} alt="" /> </div>) :
//         ''
// }