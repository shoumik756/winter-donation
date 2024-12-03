import React from 'react';

const HowItWorks = () => {
    return (
        <div className='max-w-screen-xl mx-auto lg:px-0 px-5 '>
            <div className='mb-10'>
                <h2 className='text-center text-[35px] font-bold animate__animated animate__fadeInUp'>How It Works</h2>
            </div>
            <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid grid-cols-1 gap-5 animate__animated animate__fadeInUp'>
                <div className='bg-white h-[280px] flex justify-center items-center flex-col px-5 rounded-2xl space-y-3'>
                    <h4 className='text-[35px] font-bold w-[60px] h-[60px] text-white bg-[#ff6f0f] rounded-full flex justify-center items-center'>1</h4>
                    <h2 className='text-[25px] font-semibold text-center'>Choose a Campaign</h2>
                    <p className='text-center'>Browse through various donation campaigns on our donation campaigns paage or after logging in.</p>
                </div>
                <div className='bg-white h-[280px] flex justify-center items-center flex-col px-5 rounded-2xl space-y-3'>
                    <h4 className='text-[35px] font-bold w-[60px] h-[60px] text-white bg-[#ff6f0f] rounded-full flex justify-center items-center'>2</h4>
                    <h2 className='text-[25px] font-semibold text-center'>Fill Out the Donation Form</h2>
                    <p className='text-center'>Select the items you wish to donate and complete the donation form.</p>
                </div>
                <div className='bg-white h-[280px] flex justify-center items-center flex-col px-5 rounded-2xl space-y-3'>
                    <h4 className='text-[35px] font-bold w-[60px] h-[60px] text-white bg-[#ff6f0f] rounded-full flex justify-center items-center'>3</h4>
                    <h2 className='text-[25px] font-semibold text-center'>Select a Collection Point</h2>
                    <p className='text-center'>Pick a collection point near you and check the drop-off details.</p>
                </div>
                <div className='bg-white h-[280px] flex justify-center items-center flex-col px-5 rounded-2xl space-y-3'>
                    <h4 className='text-[35px] font-bold w-[60px] h-[60px] text-white bg-[#ff6f0f] rounded-full flex justify-center items-center'>4</h4>
                    <h2 className='text-[25px] font-semibold text-center'>Confirm Your Donation</h2>
                    <p className='text-center'>Review your details and confirm your donation. You will receive confirmation via email.</p>
                </div>
            </div>
            <div className='mt-20 animate__animated animate__fadeInUp'>
                <h2 className='text-center text-[35px] font-bold'>list supported divisions</h2>
                <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid grid-cols-1 gap-5 mt-10'>
                    <div className='bg-white  flex justify-center items-center flex-col px-5 rounded-2xl space-y-3 py-2 hover:bg-[#ff6f0f] hover:text-white'>
                        <h2 className='text-[25px] font-semibold text-center'>Dhaka</h2>
                    </div>
                    <div className='bg-white  flex justify-center items-center flex-col px-5 rounded-2xl space-y-3 py-2 hover:bg-[#ff6f0f] hover:text-white'>
                        <h2 className='text-[25px] font-semibold text-center'>Chattogram</h2>
                    </div>
                    <div className='bg-white  flex justify-center items-center flex-col px-5 rounded-2xl space-y-3 py-2 hover:bg-[#ff6f0f] hover:text-white'>
                        <h2 className='text-[25px] font-semibold text-center'>Khulna</h2>
                    </div>
                    <div className='bg-white  flex justify-center items-center flex-col px-5 rounded-2xl space-y-3 py-2 hover:bg-[#ff6f0f] hover:text-white'>
                        <h2 className='text-[25px] font-semibold text-center'>Sylhet</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;