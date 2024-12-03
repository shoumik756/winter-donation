import React from 'react';
import pic1 from '../assets/1.jpg'
import pic2 from '../assets/2.jpg'
import pic3 from '../assets/3.jpg'
import pic4 from '../assets/4.jpg'


const SomeProjects = () => {
    return (
        <div className='max-w-screen-xl mx-auto lg:px-0 px-5'>
            <div className='mb-10'>
                <h2 className='text-center text-[35px] font-bold animate__animated animate__fadeInUp'>Some of Our Projects</h2>
            </div>
            <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid grid-cols-1 gap-5 animate__animated animate__fadeInUp'>
                <div className='bg-white flex justify-center items-center flex-col p-5 rounded-2xl space-y-3 shadow-2xl  '>
                    <div className=''>
                        <img className='rounded-2xl' src={pic1} alt="" />
                    </div>
                    <h5 className='text-[20px] font-medium text-[#ff6f0f]'>december, 21</h5>
                    <h2 className='text-[25px] font-semibold'>Location: Khulna</h2>
                </div>
                <div className='bg-white flex justify-center items-center flex-col p-5 rounded-2xl space-y-3 '>
                    <div className=''>
                        <img className='rounded-2xl' src={pic2} alt="" />
                    </div>
                    <h5 className='text-[20px] font-medium text-[#ff6f0f]'>february, 17</h5>
                    <h2 className='text-[25px] font-semibold'>Location: Bogura</h2>
                </div>
                <div className='bg-white flex justify-center items-center flex-col p-5 rounded-2xl space-y-3 '>
                    <div className=''>
                        <img className='rounded-2xl' src={pic3} alt="" />
                    </div>
                    <h5 className='text-[20px] font-medium text-[#ff6f0f]'>January, 10</h5>
                    <h2 className='text-[25px] font-semibold'>Location: Meherpur</h2>
                </div>
                <div className='bg-white flex justify-center items-center flex-col p-5 rounded-2xl space-y-3 '>
                    <div className=''>
                        <img className='rounded-2xl' src={pic4} alt="" />
                    </div>
                    <h5 className='text-[20px] font-medium text-[#ff6f0f]'>January, 15</h5>
                    <h2 className='text-[25px] font-semibold'>Location: Kustia</h2>
                </div>
            </div>
        </div>
    );
};

export default SomeProjects;