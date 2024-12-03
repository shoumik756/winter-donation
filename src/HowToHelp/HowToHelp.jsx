import React from 'react';
import pic1 from '../assets/s1.png'
import pic2 from '../assets/s2.png'
import pic3 from '../assets/s3.png'
import pic4 from '../assets/s4.png'
const HowToHelp = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20 px-4  grid'>
            <div className='mb-10 space-y-3'>
                <h2 className='text-center text-[35px] font-bold'>How to Help in winter helpless people</h2>
                <p className='text-center '>If you don't know how to help the winter helpless people. Then this page for you. It hepls you how to donate winter cloths to the helpless people. There are 4 easy steps that hepls you to donate cloths.</p>
            </div>
            <div>
                <div className='lg:flex  lg:justify-between grid border-2 border-[#ff6f0f] p-5 rounded-3xl mt-20'>
                    <div className='lg:w-1/2  p-5 lg:p-0'>
                        <h2 className='text-[35px] font-bold'>Step-1:</h2>
                        <p>At first register your account with name, email, photo url and password or also you can login with google</p>
                    </div>
                    <div className=' '>
                        <img className='lg:w-[500px]' src={pic1} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className='lg:flex  lg:justify-between grid border-2 border-[#ff6f0f] p-5 rounded-3xl mt-20'>
                    <div className='lg:w-1/2  p-5 lg:p-0'>
                        <h2 className='text-[35px] font-bold'>Step-2:</h2>
                        <p>After register you can login with email and password or also you can login with google</p>
                    </div>
                    <div className=' '>
                        <img className='lg:w-[500px]' src={pic2} alt="" />
                    </div>
                </div>
                <div className='lg:flex  lg:justify-between grid border-2 border-[#ff6f0f] p-5 rounded-3xl mt-20'>
                    <div className='lg:w-1/2  p-5 lg:p-0'>
                        <h2 className='text-[35px] font-bold'>Step-3:</h2>
                        <p>After login go to the menu bar and click Donation Campaigns option and you can see the running and upcomming campaigns. Choose one campaigns what you what you want to donate then click onk donation now button and it will redirects to the details page</p>
                    </div>
                    <div className=' '>
                        <img className='lg:w-[500px]' src={pic3} alt="" />
                    </div>
                </div>
                <div className='lg:flex  lg:justify-between grid border-2 border-[#ff6f0f] p-5 rounded-3xl mt-20'>
                    <div className='lg:w-1/2  p-5 lg:p-0'>
                        <h2 className='text-[35px] font-bold'>Step-4:</h2>
                        <p>In this page you can see a donation form, you can fill the all the form details and hit the submit button. Your information will be collected by our team and our team will connect you again.</p>
                    </div>
                    <div className=' '>
                        <img className='lg:w-[500px]' src={pic4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToHelp;